import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { Context } from "../../index";
import { createAutos, fetchBodies, fetchBrands, fetchColors, fetchGearboxes, fetchModels } from "../../http/autoAPI";
import { observer } from "mobx-react-lite";

const CreateAuto = observer(({ show, onHide }) => {
    const { auto } = useContext(Context);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [year, setYear] = useState('');
    const [count, setCount] = useState('');
    const [country, setCountry] = useState('');
    const [power, setPower] = useState('');
    const [volume, setVolume] = useState('');
    const [speed, setSpeed] = useState('');
    const [weight, setWeight] = useState('');
    const [consumption, setConsumption] = useState('');
    const [files, setFiles] = useState(null);
    // const [brand, setBrand] = useState();
    // const [model, setModel] = useState();
    // const [body, setBody] = useState();
    // const [color, setColor] = useState();
    // const [gearbox, setGearbox] = useState();


    useEffect(() => {
        fetchBrands().then(data => auto.setBrands(data));
        fetchBodies().then(data => auto.setBodies(data));
        fetchColors().then(data => auto.setColors(data));
        fetchModels().then(data => auto.setModels(data));
        fetchGearboxes().then(data => auto.setGearboxes(data));
    }, []);

    const selectFiles = e => {
        if(e.target.files) {console.log(e.target.files);
        setFiles(e.target.files)}
    }

    const addAuto=()=>{
        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('year', year);
        formData.append('count', count);
        formData.append('country', country);
        formData.append('power', power);
        formData.append('volume', volume);
        formData.append('speed', speed);
        formData.append('weight', weight);
        formData.append('consumption', consumption);
        for(let item of files) {
            formData.append('image', item);
          }
        formData.append('modelId', auto.selectedModel.id);
        formData.append('brandId', auto.selectedBrand.id);
        formData.append('bodyId', auto.selectedBody.id);
        formData.append('gearboxId', auto.selectedGearbox.id);
        createAutos(formData).then(data => onHide());
        
    }


    return (

        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Добавить автомобиль
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>

                    <Form.Control
                   value={name}
                   onChange={e => setName(e.target.value)} placeholder="Введите название" />

                    <textarea
                   value={description}
                   onChange={e => setDescription(e.target.value)} placeholder="Краткое описание"  />

                    <Form.Control
                   value={price}
                   onChange={e => setPrice(Number(e.target.value))} placeholder="Введите стоимость" type="number" />

                    <Form.Control
                   value={year}
                   onChange={e => setYear(Number(e.target.value))} placeholder="Введите год выпуска" type="number" />

                    <Form.Control
                   value={count}
                   onChange={e => setCount(Number(e.target.value))} placeholder="Введите количество" type="number" />

                    <Form.Control
                   value={country}
                   onChange={e => setCountry(e.target.value)} placeholder="Введите страну производителя" />

                    <Form.Control
                   value={power}
                   onChange={e => setPower(Number(e.target.value))} placeholder="Введите мощность двигателя" type="number" />

                    <Form.Control
                   value={volume}
                   onChange={e => setVolume(Number(e.target.value))} placeholder="Введите объем двигателя" type="number" />

                    <Form.Control
                   value={speed}
                   onChange={e => setSpeed(Number(e.target.value))} placeholder="Введите максимальную скорость" type="number" />

                    <Form.Control
                   value={weight}
                   onChange={e => setWeight(Number(e.target.value))} placeholder="Введите массу" type="number" />

                    <Form.Control
                   value={consumption}
                   onChange={e => setConsumption(e.target.value)} placeholder="Введите потребление топлива" type="number" />

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{ auto.selectedBrand.name || "Выберите марку"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.brands.map(brand => <Dropdown.Item onClick={() => auto.setSelectedBrand(brand)} key={brand.id}>{brand.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{ auto.selectedModel.name || "Выберите модель"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.models.map(model => <Dropdown.Item onClick={() => auto.setSelectedModel(model)} key={model.id}>{model.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{ auto.selectedBody.name || "Выберите кузов"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.bodies.map(body => <Dropdown.Item onClick={() => auto.setSelectedBody(body)} key={body.id}>{body.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{ auto.selectedColor.name || "Выберите цвет"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.colors.map(color => <Dropdown.Item onClick={() => auto.setSelectedColor(color)} key={color.id}>{color.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown> */}

                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{ auto.selectedGearbox.name || "Выберите КПП"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.gearboxes.map(gearbox => <Dropdown.Item onClick={() => auto.setSelectedGearbox(gearbox)} key={gearbox.id}>{gearbox.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>


                    <input type="file" multiple onChange={selectFiles}></input>
                    {/* <Form.Control
                        type="file" onChange={selectFiles} multiple /> */}
                </Form>
                <hr />
            </ModalBody>
            <ModalFooter>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={addAuto}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
});

export default CreateAuto;