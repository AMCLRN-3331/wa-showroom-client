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
        <Container className="container-booking">
            <h1 className="h1Booking"><b>Связаться с нами</b> </h1>
            <p>Оставьте свои контактные данные и менеджер свяжется с вами в ближайшее время</p>
            <Form>
                <Form>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)} className="mt-2 inputB" placeholder="Представтесь" />
                    <FormControl
                        value={number}
                        onChange={e => setNumber(e.target.value)} className="mt-2 inputB" type="tel" placeholder="Номер телефона" />
                    <Button className="mt-2 mb-2 ord-button" onClick={addBooking}>Отправить</Button>
                </Form>
            </Form>
        </Container>
    );
}

export default BookingForm;