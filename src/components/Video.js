import { observer } from "mobx-react-lite";
import React from "react";


const Video = observer(() => {
    
    return(
        <div class="ground">

        <video autoPlay loop muted plays-inline class="back-video" >
        <source src="/videos/wa-sample.mp4" type="video/mp4" />
        </video>
    
        <div class="content">
            <div class="head-title">
                <h1>WhiteAuto - ваш надежный партнер в мире автомобилей.</h1>
                <h2>Мы предлагаем широкий выбор качественных автомобилей различных марок и моделей. Посетите наш автосалон уже сегодня и воплотите в жизнь свою мечту о новом автомобилей.
                </h2>
                <div class="buttons">
                </div>
            </div>
            <div class="head-title"></div>
        </div>
    
    </div>
    );
});

export default Video;