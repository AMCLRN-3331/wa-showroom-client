import React, { useContext, useEffect, useState } from "react";
import { Button, Container, Form, Table } from "react-bootstrap";
import Card from "react-bootstrap/Card"
import CreateAuto from "../components/modals/CreateAuto";
import CreateBrand from "../components/modals/CreateBrand";
import CreateBody from "../components/modals/CreateBody";
import CreateColor from "../components/modals/CreateColor";
import CreateGearbox from "../components/modals/CreateGearbox";
import CreateModel from "../components/modals/CreateModel";
import { fetchBookings } from "../http/autoAPI";
import { Context } from "..";

const Admin = () => {
    const [autoVisible, setAutoVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [bodyVisible, setBodyVisible] = useState(false);
    const [colorVisible, setColorVisible] = useState(false);
    const [gearboxVisible, setGearboxVisible] = useState(false);
    const [modelVisible, setModelVisible] = useState(false);

    const { booking } = useContext(Context);

    useEffect(() => {
        fetchBookings().then(data => booking.setBookings(data))
    })

    return (
        <Container className="column" style={{ marginTop: 250, marginBottom: 250 }} >
            <h1>Страница администратора</h1>
            <Button onClick={() => setAutoVisible(true)}>Добавить авто</Button>
            <Button onClick={() => setBrandVisible(true)}>Добавить марку</Button>
            <Button onClick={() => setColorVisible(true)}>Добавить цвет</Button>
            <Button onClick={() => setBodyVisible(true)}>Добавить кузов</Button>
            <Button onClick={() => setModelVisible(true)}>Добавить модель</Button>
            <Button onClick={() => setGearboxVisible(true)}>Добавить коробку</Button>
            <Button>Зарегистрировать пользователя</Button>
            <CreateAuto show={autoVisible} onHide={() => setAutoVisible(false)} />
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateBody show={bodyVisible} onHide={() => setBodyVisible(false)} />
            <CreateColor show={colorVisible} onHide={() => setColorVisible(false)} />
            <CreateGearbox show={gearboxVisible} onHide={() => setGearboxVisible(false)} />
            <CreateModel show={modelVisible} onHide={() => setModelVisible(false)} />

            <Container>

                <Table striped>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Имя</th>
                            <th>Номер</th>
                            <th>Время</th>
                        </tr>
                    </thead>
                    <tbody>
                        {booking.bookings ? booking.bookings.map(item => <tr><td>{item.id}</td><td>{item.name}</td><td>{item.number}</td><td>{item.createdAt}</td></tr>) : <div></div>}

                    </tbody>
                </Table>

            </Container>

        </Container>

    );
};

export default Admin;