import React, { useContext, useState } from "react";
import { Button, Dropdown, Form,  FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { Context } from "../../index";
import { createBodies } from "../../http/autoAPI";

const CreateBody = ({show, onHide}) =>{
    const [value, setValue] = useState('');
    const addBody = () => {
        createBodies({name: value}).then(data=>{
            setValue('');
            onHide();
        })
    }
    return(
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Добавить кузов
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                   <FormControl
                   value={value}
                   onChange={e => setValue(e.target.value)}
                   placeholder="Добавить кузов" />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={addBody}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateBody;