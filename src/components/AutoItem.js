import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const AutoItem = ({ auto, brands, models }) => {
    const history = useNavigate();
    return (
        <Col md={4} onClick={() => history('/auto/' + auto.id)} className="mt-2" style={{cursor: 'pointer'}}>
            {/* <Card style={{ cursor: 'pointer' }} border={'light'}>
            <Carousel>
                    {auto.images.map(image => <Carousel.Item><Image className="card-image" key={image.id} width={426} height={240} src={'http://localhost:7000/' + image.name} /></Carousel.Item> )}
                </Carousel>
                

                <div>
                    {auto.name}
                </div>
            </Card> */}

            {/* <article class="card card-inverse animated fadeInLeft">
                <img class="img-responsive" src={'http://localhost:7000/' + auto.images[0].name} alt="Deer in nature" />
                <div class="card-img-overlay">
                    <h4 class="card-title">{auto.name}</h4>
                    <h6 class="text-muted">{auto.price}</h6>
                    <p class="card-text">{auto.desc}</p>
                </div>
            </article> */}

            <div className="auto-card">
            
                <div class="slider">
                <div className="slider-top">
                    {brands.map(brand => brand.id === auto.brandId ? <span className="card-brand"><Image width={50} src={'http://localhost:7000/' + brand.image} /> {brand.name}</span> : <span style={{display: 'none'}}></span>)}
                    
                    <div>
                    <h1>
                        {auto.name}
                    </h1>
                    {models.map(model => model.id === auto.modelId ? <span className="card-model">Модель: {model.name}</span> : <span></span>)}

                    <h2 className="title-price">От {auto.price}₽</h2>
                    <p className="card-desc">{auto.description}</p>
                    <div class="card-line"></div>
                    </div>
                </div>
                    <div class="slide" style={{ background: `url('http://localhost:7000/${auto.images[0].name}')` }}></div>
                    <div class="slide" style={{ background: `url('http://localhost:7000/${auto.images[1].name}')` }}></div>
                    <div class="slide" style={{ background: `url('http://localhost:7000/${auto.images[2].name}')` }}></div>

                </div>
                
            </div>
        </Col>



    );
}

export default AutoItem;

{/*<Carousel.Item><Image key={image.id} className="Card-image" style={{}} height={200} src={'http://localhost:7000/' + image.name} /></Carousel.Item> )} */ }