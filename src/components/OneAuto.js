import React, { useContext, useEffect, useState } from "react";
import { Card, Col, Container, Image, ListGroup, ListGroupItem } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { useNavigate } from "react-router-dom";
import { fetchColorsForAuto } from "../http/autoAPI";
import BookingForm from "./BookingForm";
import Order from "./Order";
import { Context } from "../index";

const OneAuto = ( {auto} ) => {
  const  [selectedColor, setColor] = useState('');
  let clr;
  return (
    <div>
      <Carousel>
        {auto.images ? (
          auto.images.map((image) => (
            <Carousel.Item style={{ width: "200vh" }}>
              <div
                style={{
                  background: `url('http://31.129.99.186:7000/${image.name}')`,
                  width: "200vh",
                  height: "950px",
                  backgroundSize: "cover",
                }}
              ></div>
            </Carousel.Item>
          ))
        ) : (
          <div></div>
        )}
      </Carousel>

      {/* <div>
        <div>
            <h2>Создание автомобиля</h2>
            <Image  src={'http://localhost:7000/'}/>
        </div>
      </div> */}

      <Col md={4}>
        <h1>Описание</h1>
        <h2>{auto.name}</h2>
        <p>{auto.description}</p>
        <p>
          Доступен в цветах:{" "}
          <ListGroup className="brand-filter mb-3">
            {auto.colors ? (
              auto.colors.map((color) => <ListGroup.Item style={{cursor: 'pointer', border: 'none'}} key={color.id} className="color-select" active={ color.id === selectedColor.id } onClick={() => setColor(color)}>{color.name}</ListGroup.Item>)
            ) : (
              <ListGroup.Item></ListGroup.Item>
            )}
          </ListGroup>
        </p>
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
      <Col md={4}></Col>
            {
              console.log(selectedColor)
            }
      <Order auto={auto} color={selectedColor.id} />
    </div>
  );
};

export default OneAuto;
