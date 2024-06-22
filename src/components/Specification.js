import React from "react";
import { Button, Row } from "react-bootstrap";

const Specification = () => {
  return (
    // <Row md={2} className="short-spec d-flex">
    <div className="d-flex short-spec">
      <div
        className="short-spec-item"
        style={{
          background: "url(http://31.129.99.186:7000/comfort.png)",
          backgroundRepeat: "no-repeat",
          
        }}
      >
          <div class="head-title-spec">
            <h3 className="h3S"><b>Комфорт</b></h3>
            <p className="pS">
            Комфорт - это удобство  пассажиров и водителя. Включает в себя качество, доступность и удобство использования. Направлено на создание приятной и удобной среды.
            </p>
        </div>
      </div>
      <div
        className="short-spec-item"
        style={{
          background: "url(http://31.129.99.186:7000/speed.png)",
          backgroundRepeat: "no-repeat",
          
        }}
      >
          <div class="head-title-spec">
            <h3 className="h3S"><b>Скорость</b></h3>
            <p className="pS">
            Скорость влияет на безопасность движения, потребление топлива, динамику разгона и торможения, а также на общее удовольствие от управления автомобилем.
            </p>
        </div>
      </div>
      <div
        className="short-spec-item"
        style={{
          background: "url(http://31.129.99.186:7000/laconichnost.png)",
          backgroundRepeat: "no-repeat",
          
        }}
      >
          <div class="head-title-spec">
            <h3 className="h3S"><b>Лаконичность</b></h3>
            <p className="pS">
            Минималистичный и эффективный дизайн, удобство в использовании помогает упростить восприятие и управление, что повышает безопасность и удобство во время вождения.
            </p>
        </div>
      </div>
    </div>
    // </Row>
  );
};
export default Specification;
