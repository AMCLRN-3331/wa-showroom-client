import React, { useEffect, useState } from "react";
import { Card, Col, Container, Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { fetchColorsForAuto } from "../http/autoAPI";
import BookingForm from "./BookingForm";

const OneAuto = ({ auto }) => {

    return (
<div>
                <Carousel>
                    {auto.images ? auto.images.map(image => <Carousel.Item style={{width: '200vh'}}><div  style={{ background: `url('http://localhost:7000/${image.name}')`, width: '200vh', height:'950px', backgroundSize: 'cover' }}></div></Carousel.Item>) : <div></div>}
                </Carousel>


            <Col md={4}>
            <h1>Описание</h1>
                <h2>{auto.name}</h2>
                <p>{auto.description}</p>
                <p>Доступен в цветах: {auto.colors ? auto.colors.map(color => <span>{color.name}</span>) : <span></span>}</p>
                <p>Цена от: {auto.price}</p>
                <p>Год выпуска: {auto.year}</p>
                <p>Наличие в автосалоне: {auto.count} экземпляров</p>
                <p>Страна производства: {auto.country}</p>
                <p>Мощность двигателя: {auto.power} л.с.</p>
                <p>Объем двигателя: {auto.volume} куб. метров</p>
                <p>Максимальная скорость: {auto.speed} км/ч</p>
                <p>Масса: {auto.weight} кг.</p>
                <p>Расход топлива: {auto.consumption} л/100км</p>
                
            </Col>
            <Col md={4}>
            </Col>

            <BookingForm />
</div>

    );
}

export default OneAuto;