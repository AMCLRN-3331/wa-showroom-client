import React from "react";
import { Button, Row } from "react-bootstrap";
import { Container, Form } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const About = () => {
  return (
    <div>
      <div
        style={{
          paddingTop: "3%",
          paddingBottom: "2%",
          // background: `url('http://31.129.99.186:7000/fonstola.ru_109702.jpg')`,
          width: '100%',
          height: '100px'
        }}
      >
        <h1
        style={{
          textAlign: 'center',
          marginTop: '5%',
          fontSize: '50px'
        }}>
          <b>О нас</b>
        </h1>
      </div>
      <div className="d-flex about">
        <div
          style={{
            marginRight: "50px",
          }}
        >
          <p>
            <b>WhiteAuto</b>
          </p>
          <h3 className="h1Ab">Приветствуем Вас!</h3>
          <img
            style={{
              height: "200px",
            }}
            className="imgAbb"
            src="http://31.129.99.186:7000/aston_martin_v8_vantage_37478.jpg"
          ></img>
        </div>

        <p
          style={{
            textAlign: "justify",
            width: "450px",
          }}
        >
          Мы предлагаем широкий выбор качественных автомобилей различных марок и
          моделей. Независимо от того, ищете ли вы спортивный седан или надежный
          внедорожник, у нас есть что предложить профессиональные консультанты
          помогут вам выбрать автомобиль, который идеально подойдет под ваши
          потребности и бюджет. Здесь вы сможете не только приобрести автомобиль
          вашей мечты, но и получить отличный сервис и поддержку на всех этапах.
          Посетите наш автосалон уже сегодня и воплотите в жизнь свою мечту о
          новом автомобиле.
        </p>
      </div>

      <div className="history">
        <div className="d-flex aaa">
          <div className="adAbout">
            <h3
              style={{
                color: "white",
                margin: "auto",
                marginTop: "40px",
              }}
            >
              <b>История</b>
            </h3>
            <p
              style={{
                textAlign: "justify",
                margin: "auto",
                width: "600px",
                color: "#ffffffcb",
                marginBottom: "10px",
                marginTop: "50px",
              }}
            >
              Наш автосалон начал свою историю совсем недавно, мы стремимся
              предложить нашим клиентам не только широкий выбор автомобилей, но
              и высочайший уровень сервиса. За годы работы мы постоянно
              развивались и расширяли свои возможности. В 2022 году мы открыли
              новый современный автосалон, оборудованный по последнему слову
              техники, чтобы обеспечить нашим клиентам комфортное и
              информативное пребывание.
            </p>
            <p
              style={{
                textAlign: "justify",
                margin: "auto",
                width: "600px",
                color: "#ffffffcb",
                marginBottom: "10px",
              }}
            >
              В 2024 году мы запустили наш первый веб-сайт, чтобы расширить нашу
              доступность и обеспечить клиентам возможность ознакомиться с
              нашими предложениями прямо из дома. Сегодня наш сайт стал
              неотъемлемой частью нашего бизнеса, предлагая удобный способ
              выбора и покупки автомобиля. Мы гордимся тем, что за годы работы
              нам удалось завоевать доверие клиентов благодаря нашей честной и
              открытой политике.
            </p>
            <p
              style={{
                textAlign: "justify",
                margin: "auto",
                width: "600px",
                color: "#ffffffcb",
                marginBottom: "10px",
              }}
            >
              Мы стремимся к постоянному совершенствованию и предлагаем только
              лучшие автомобили, соответствующие самым высоким стандартам
              качества.
            </p>
            <p
              style={{
                textAlign: "justify",
                margin: "auto",
                width: "600px",
                color: "#ffffffcb",
              }}
            >
              Наша история — это история постоянного развития и стремления к
              совершенству. Мы рады видеть вас в нашем автосалоне и на нашем
              сайте, где вы можете найти автомобиль своей мечты.
            </p>
          </div>
          <div>
            <img
              style={{
                marginLeft: "5%",
              }}
              className="imgAb"
              src="http://31.129.99.186:7000/mmb0016.jpg"
            ></img>{" "}
          </div>
        </div>
      </div>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        <b>Как забронировать автомобиль?</b>
      </h1>
      <div className="d-flex bookin">
        <div
          className="blockAbout"
          style={{
            border: "#7070708e solid 2px",
          }}
        >
          <h2>
            <b>1</b>
          </h2>
          <p>
            Зайдите в ассортимент автосалона. Выберите интересующуюся Вас бренд
            автомобиля.
          </p>
        </div>
        <div
          className="blockAbout"
          style={{
            border: "#3d3d3d9c solid 2px",
          }}
        >
          <h2>
            <b>2</b>
          </h2>
          <p>
            Выберите заинтересованную Вами модель автомобиля, подбире цвет,
            который присутсвует в наличие и в конце страницы забронируйте
            просмотр!
          </p>
        </div>
        <div
          className="blockAbout"
          style={{
            border: "#282828 solid 2px",
          }}
        >
          <h2>
            <b>3</b>
          </h2>
          <p>
            Готово! Если сделали все правильно, бронирование прошло успешно, в
            течение нескольких дней с Вами свяжется Наш специалист и
            проинформирует Вас о дальнейших действиях.
          </p>
        </div>
      </div>
      <Button className="ord-button2">
        <b>Перейти в каталог</b>
      </Button>
      <div style={{
            backgroundColor: '#282828',
            color: 'white'
          }}>
       
      </div>
    </div>
  );
};

export default About;