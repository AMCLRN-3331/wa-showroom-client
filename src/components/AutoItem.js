import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const AutoItem = ({ auto, brands, models }) => {
    const history = useNavigate();
    return (
        <Col md={4} onClick={() => history('/auto/' + auto.id)} className="mt-2" style={{cursor: 'pointer'}}>
            

            <div className="auto-card">
            
                <div class="slider">
                <div className="slider-top">
                    {brands.map(brand => brand.id === auto.brandId ? <span className="card-brand"><Image width={100} src={'http://31.129.99.186:7000/' + brand.image} /> {brand.name}</span> : <span style={{display: 'none'}}></span>)}
                    
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
                    <div class="slide" style={{ background: `url('http://31.129.99.186:7000/${auto.images[0].name}')` }}></div>
                    <div class="slide" style={{ background: `url('http://31.129.99.186:7000/${auto.images[1].name}')` }}></div>
                    <div class="slide" style={{ background: `url('http://31.129.99.186:7000/${auto.images[2].name}')` }}></div>

                </div>
                
            </div>
        </Col>



    );
}

export default AutoItem;

{/*<Carousel.Item><Image key={image.id} className="Card-image" style={{}} height={200} src={'http://localhost:7000/' + image.name} /></Carousel.Item> )} */ }