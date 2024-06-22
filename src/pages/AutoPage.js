import React, { useContext, useEffect, useState } from "react";
import { Card, Carousel, Col, Container, Image } from "react-bootstrap";
import { Context } from "../index";
import { useParams } from "react-router-dom";
import { fetchColorsForAuto, fetchOneAuto } from "../http/autoAPI";
import { observer } from "mobx-react-lite";
import OneAuto from "../components/OneAuto";

const AutoPage = observer(() => {

    //const {auto} = useContext(Context);
    const [auto, setAutos] = useState({ info: [] });
    const { id } = useParams();

    useEffect(() => {
        fetchOneAuto(id).then(data => setAutos(data));
        
        // fetchColorsForAuto(id).then(data => setColors(data));
    }, []);
    
    return (
        <OneAuto auto={auto} />
       
    );
})

export default AutoPage;