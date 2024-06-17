import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import { createBooking } from "../http/autoAPI";

const BookingForm = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const addBooking = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('number', number);
        createBooking(formData).then(alert('Заявка принята!'));
    }

    return (
        <Container>
            <h1>Заинтересовал автомобиль?</h1>
            <h2>Оставьте свои контактные данные и менеджер свяжется с вами в ближайшее время</h2>
            <Form>
                <Form>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)} className="mt-2" placeholder="Укажите имя" />
                    <FormControl
                        value={number}
                        onChange={e => setNumber(e.target.value)} className="mt-2" type="tel" placeholder="Номер телефона" />
                    <Button className="mt-2 mb-2 ord-button" onClick={addBooking}>Добавить</Button>
                </Form>
            </Form>
        </Container>
    );
}

export default BookingForm;