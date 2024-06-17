import React, { useContext, useState } from "react";
import { Button, Dropdown, Form,  FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { Context } from "../../index";
import { createGearboxes } from "../../http/autoAPI";

const CreateGearbox = ({show, onHide}) =>{
    const [value, setValue] = useState('');
    const addGearbox = () => {
        createGearboxes({ name: value }).then(data => {
            setValue('');
            onHide();
        })
    }
    return(
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Добавить коробку
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                   <FormControl value={value}
                        onChange={e => setValue(e.target.value)} placeholder="Добавить коробку" />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={addGearbox}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateGearbox;