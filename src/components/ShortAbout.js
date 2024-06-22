import React from "react";
import { Button, Row } from "react-bootstrap";

const ShortAbout = () => {
  return (
    <Row md={3} className="short-about">
      <div
        className="short-about-item"
        style={{ background: "url(http://31.129.99.186:7000/0bf55bf5-2293-41ff-8398-56b0e40ba86c.jpg)" }}
      ></div>
      <div className="short-about-item">
        <h1 className="h1About">
          <b>Почему именно мы?</b>
        </h1>
        <p>
          Автосалон "White Auto" предлагает широкий выбор качественных
          автомобилей различных марок и моделей. Независимо от того, ищете ли вы
          сем, спортивный седан или надежный внедорожник, у нас есть что
          предложить профессиональные консультанты помогут вам выбрать
          автомобиль, который идеально подойдет под ваши потребности и бюджет.
        </p>

        <p>
          Здесь вы сможете не только приобрести автомобиль вашей мечты, но и
          получить отличный сервис и поддержку на всех этапах. Посетите наш
          автосалон уже сегодня и воплотите в жизнь свою мечту о новом
          автомобиле.
        </p><br></br>
        <Button className="ord-button">Забронировать просмотр</Button>
      </div>
    </Row>
  );
};

export default ShortAbout;
