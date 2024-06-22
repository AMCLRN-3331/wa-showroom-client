import React, { useContext, useEffect } from "react";
import AutoList from "../components/AutoList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchAutos, fetchBodies, fetchModels, fetchGearboxes } from "../http/autoAPI";
import { Col, Container, Row } from "react-bootstrap";
import BrandBar from "../components/BrandBar";
import Pages from "../components/Pages";

const Catalog = observer(() => {
    const {auto} = useContext(Context);

    useEffect(() => {
        fetchBrands().then(data => auto.setBrands(data));
        fetchBodies().then(data => auto.setBodies(data));
        fetchModels().then(data => auto.setModels(data));
        fetchGearboxes().then(data => auto.setGearboxes(data));
        fetchAutos(null, 1, 2).then(data => {
            auto.setAutos(data.rows);
            auto.setTotalCount(data.count)
            });
    }, []);

    useEffect(()=>{
        fetchAutos(auto.selectedBrand.id, auto.selectedModel.id, auto.page, ).then(data => {
            auto.setAutos(data.rows);
            auto.setTotalCount(data.count/2)
            });
    }, [auto, auto.selectedBrand, auto.selectedModel, auto.page]);


    return (
        
        <div style={{marginTop: '100px', marginBottom: '150px'}}>
            <div style={{marginLeft: '50px'}}>
            <h5>Выберите свой автомобиль.</h5>
            <Row>
                <Row md={3}>
                    <BrandBar />
                </Row>
            </Row>
            </div>
            <AutoList />
            <Pages />
        </div>
        
    );
});

export default Catalog;