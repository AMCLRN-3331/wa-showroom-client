import React, { useState } from "react";
import { Button, Container, Form, FormControl } from "react-bootstrap";
import { createOrder } from "../http/autoAPI";

const Order = ({auto, color}) => {
    console.log(color)
    const [name, setName] = useState('');
    const [email, setUserEmail] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const addOrder = () => {
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('date', date);
        formData.append('time', time);
        formData.append('autoId', auto.id);
        formData.append('colorId', color);

        createOrder(formData).then(alert('Заявка принята!'));
    }

    return (
        <Container className="container-booking">
            <h1 className="h1Booking"><b>Забронировать данный автомобиль:</b> </h1>
            <p>Оставьте свои контактные данные и менеджер свяжется с вами в ближайшее время</p>
            <Form>
                <Form>
                    <FormControl
                        value={name}
                        onChange={e => setName(e.target.value)} className="mt-2 inputB" placeholder="Представтесь" />
                    <FormControl
                        value={email}
                        onChange={e => setUserEmail(e.target.value)} className="mt-2 inputB" type="email" placeholder="Электронная почта" />
                    <FormControl
                        value={date}
                        onChange={e => setDate(e.target.value)} className="mt-2 inputB" type="date" placeholder="Выберите удобную дату" />
                    <FormControl
                        value={time}
                        onChange={e => setTime(e.target.value)} className="mt-2 inputB" type="time" placeholder="Выберите удобное время" />
                    <Button className="mt-2 mb-2 ord-button" onClick={addOrder}>Отправить</Button>
                </Form>
            </Form>
        </Container>
    );
}

export default Order;