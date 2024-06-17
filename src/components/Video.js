import { observer } from "mobx-react-lite";
import React from "react";


const Video = observer(() => {
    
    return(
        <div class="ground">

        <video autoPlay loop muted plays-inline class="back-video" >
        <source src="/videos/wa-sample.mp4" type="video/mp4" />
        </video>
    
        {/* <nav class="header">
            <span class="logo">white auto</span>
    
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">Каталог</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Контакты</a></li>
                <li><a href="#zc">Лицензия</a></li>
            </ul>
        </nav> */}
    
        <div class="content">
            <div class="head-title">
                <h1>Типа самый большой заголовок на странице, который сразу видно</h1>
                <h2>И еще один заголовок, содержащий какую-то не очень важную информацию</h2>
                <div class="buttons">
                    {/* <a href="#" class="order-button">Найти автомобиль</a>
                    <a href="#" class="info-button">Подробнее...</a> */}
                </div>
            </div>
            <div class="head-title"></div>
        </div>
    
    </div>
    );
});

export default Video;