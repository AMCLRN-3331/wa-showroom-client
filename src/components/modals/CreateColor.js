import React, { useContext, useEffect, useState } from "react";
import { Button, Dropdown, Form, FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { Context } from "../../index";
import { createColors, fetchAutos } from "../../http/autoAPI";

const CreateColor = ({ show, onHide }) => {
    const [value, setValue] = useState('');
    const [car, setCar] = useState('');
    const {auto} = useContext(Context);

    useEffect(() => {
        fetchAutos().then(data => {
            auto.setAutos(data.rows);
            });
    }, []);

    const addColor = () => {
        const formData = new FormData();
        formData.append('name', value);
        formData.append('autoId', auto.selectedAuto.id);
        
        createColors(formData).then(data => onHide());
        
    }
    
    return (
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Добавить цвет
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormControl value={value}
                        onChange={e => setValue(e.target.value)} placeholder="Добавить цвет" />
                        <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{ auto.selectedAuto.name || "Выберите автомобиль"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {auto.autos.map(item => <Dropdown.Item onClick={() => auto.setSelectedAuto(item)} key={item.id}>{item.name}</Dropdown.Item>)}
                        </Dropdown.Menu>
                    </Dropdown>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={addColor}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateColor;