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
import CreateSpec from "../components/modals/CreateSpec";

const Admin = () => {
    const [autoVisible, setAutoVisible] = useState(false);
    const [brandVisible, setBrandVisible] = useState(false);
    const [bodyVisible, setBodyVisible] = useState(false);
    const [colorVisible, setColorVisible] = useState(false);
    const [gearboxVisible, setGearboxVisible] = useState(false);
    const [modelVisible, setModelVisible] = useState(false);
    const [specVisible, setSpecVisible] = useState(false);

    const { booking } = useContext(Context);

    useEffect(() => {
        fetchBookings().then(data => booking.setBookings(data))
    })

    return (
        <Container className="admin-main" style={{ marginTop: 250, marginBottom: 250 }} >
            <h1>Страница администратора</h1>
            <Button className="admin-button" onClick={() => setAutoVisible(true)}>Добавить авто</Button>
            <Button className="admin-button" onClick={() => setBrandVisible(true)}>Добавить марку</Button>
            <Button className="admin-button" onClick={() => setColorVisible(true)}>Добавить цвет</Button>
            <Button className="admin-button" onClick={() => setBodyVisible(true)}>Добавить кузов</Button>
            <Button className="admin-button" onClick={() => setModelVisible(true)}>Добавить модель</Button>
            <Button className="admin-button" onClick={() => setGearboxVisible(true)}>Добавить коробку</Button>
            <Button className="admin-button" onClick={() => setSpecVisible(true)}>Зарегистрировать пользователя</Button>
            <CreateAuto show={autoVisible} onHide={() => setAutoVisible(false)} />
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
            <CreateBody show={bodyVisible} onHide={() => setBodyVisible(false)} />
            <CreateColor show={colorVisible} onHide={() => setColorVisible(false)} />
            <CreateGearbox show={gearboxVisible} onHide={() => setGearboxVisible(false)} />
            <CreateModel show={modelVisible} onHide={() => setModelVisible(false)} />
                <CreateSpec show={specVisible} onHide={() => setSpecVisible(false)} />

            

        </Container>

    );
};

export default Admin;