import React, { useContext, useState } from "react";
import { Button, Dropdown, Form,  FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { Context } from "../../index";
import { createModels } from "../../http/autoAPI";

const CreateModel = ({show, onHide}) =>{
    const [value, setValue] = useState('');
    const addModel = () => {
        createModels({ name: value }).then(data => {
            setValue('');
            onHide();
        })
    }
    return(
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Добавить модель
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                   <FormControl value={value}
                        onChange={e => setValue(e.target.value)} placeholder="Добавить модель" />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={addModel}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateModel;