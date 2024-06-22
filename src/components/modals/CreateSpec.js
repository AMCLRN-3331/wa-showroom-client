import React, { useContext, useState } from "react";
import { Button, Dropdown, Form,  FormControl, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from "react-bootstrap";
import { Context } from "../../index";
import { createModels } from "../../http/autoAPI";
import { registration } from "../../http/userAPI";

const CreateSpec = ({show, onHide}) =>{
    const [email, setUserEmail] = useState('');
    const [password, setPassword] = useState('');
    const addUser = () => {
        
        registration({email: email, password: password}).then(data => onHide());
        
    }

    return(
        <Modal show={show} onHide={onHide} centered>
            <ModalHeader closeButton>
                <ModalTitle id="contained-modal-title-vcenter">
                    Добавить специалиста
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                <Form>
                   <FormControl value={email}
                        onChange={e => setUserEmail(e.target.value)} type="email" placeholder="Введите Email" />
                        <FormControl value={password}
                        onChange={e => setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button onClick={onHide}>Закрыть</Button>
                <Button onClick={addUser}>Добавить</Button>
            </ModalFooter>
        </Modal>
    );
}

export default CreateSpec;