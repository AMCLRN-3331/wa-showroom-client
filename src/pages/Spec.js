import React, { useContext, useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";
import { fetchAutos, fetchBookings, fetchColors, fetchOrders } from "../http/autoAPI";
import { Context } from "../index";
import { observer } from "mobx-react-lite";



const Spec = observer(() => {
    const { auto } = useContext(Context);
    const { booking } = useContext(Context)

    useEffect(() => {
        fetchOrders().then(data => booking.setOrders(data));
        fetchBookings().then(data => booking.setBookings(data));
        fetchAutos().then(data => {
            auto.setAutos(data.rows);
        });
        fetchColors().then(data => {
            auto.setColors(data);
        })
    }, []);
    return (


        <Container className="spec-main">
            <h1>Страница специалиста</h1>
            <h2>Заявки на бронирование:</h2>
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Имя</th>
                        <th>Email</th>
                        <th>Дата</th>
                        <th>Время</th>
                        <th>Автомобиль</th>
                        <th>Цвет</th>
                        <th>Оформлено</th>
                    </tr>
                </thead>
                <tbody>
                    {booking.orders ? booking.orders.map(item => <tr><td>{item.id}</td><td>{item.name}</td><td>{item.email}</td><td>{item.date}</td><td>{item.time}</td><td>{auto.autos.map(at => at.id === item.autoId ? <span>{at.name}</span> : <span></span>)}</td><td>{auto.colors.map(at => at.id === item.colorId ? <span>{at.name}</span> : <span></span>)}</td><td>{item.createdAt}</td></tr>) : <div></div>}

                </tbody>
            </Table>


            <h2>Заявки на консультацию:</h2>
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
    );
});

export default Spec;