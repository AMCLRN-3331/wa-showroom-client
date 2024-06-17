import React from "react";
import { Button, Row } from "react-bootstrap";

const ShortAbout = () =>{
return (
    <Row md={3} className="short-about d-flex">
        <div className="short-about-item" style={{background: 'url(http://localhost:7000/8829b28e-14e5-414a-8f6e-ae780e2a39d1.jpg)'}}>

        </div>
        <div className="short-about-item">
            <h1>
                Почему именно мы?
            </h1>
            <p>
                Автосалон "White Auto" Предлагает клиентам разнообразный выбор новых автомобилей. Наш приоритет - обеспечить покупателя автомобилем.
            </p>

            <p>
                Компания ищет подход к каждому клиенту. Главная задача работы - заинтересовать потенциального клиента, помочь ему определиться с выбором покупки. 
            </p>
            <Button className="ord-button">
                Забронировать просмотр
            </Button>
        </div>
    </Row>
);
}

export default ShortAbout;