import React, { useContext, useState } from "react";
import { Button, Dropdown, Form,  FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { Context } from "../../index";
import { createBrands } from "../../http/autoAPI";

const CreateBrand = ({show, onHide}) =>{
    const [value, setValue] = useState('');
    const [files, setFiles] = useState(null);
    const addBrand = () => {
        const formData = new FormData();
        formData.append('name', value);
        formData.append('image', files[0]);
        console.log(formData.get('image'));
        createBrands(formData).then(data => onHide());
    }

    const selectFiles = e => {
        if(e.target.files) {
        setFiles(e.target.files)}
    }

    return(
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Добавить марку
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                   <FormControl
                   value={value}
                   onChange={e => setValue(e.target.value)} placeholder="Добавить марку" />
                   <input type="file"  onChange={selectFiles}></input>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={addBrand}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateBrand;