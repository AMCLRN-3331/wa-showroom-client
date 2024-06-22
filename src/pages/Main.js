import React, { useContext, useEffect } from "react";
import AutoList from "../components/AutoList";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { fetchBrands, fetchAutos, fetchBodies, fetchColors, fetchModels, fetchGearboxes, fetchColorsForAuto } from "../http/autoAPI";
import BrandBar from "../components/BrandBar";
import Pages from "../components/Pages";
import Video from "../components/Video";
import ShortAbout from "../components/ShortAbout";
import BookingForm from "../components/BookingForm";
import Specification from "../components/Specification";

const Main = observer(() => {
    const { auto } = useContext(Context);

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
console.log(auto.page);
    useEffect(()=>{
        fetchAutos(auto.selectedBrand.id, auto.selectedModel.id, auto.page, ).then(data => {
            auto.setAutos(data.rows);
            auto.setTotalCount(data.count/2)
            });
    }, [auto, auto.selectedBrand, auto.selectedModel, auto.page]);

    return (
        <div>
            <Video />
            <ShortAbout />
            <Specification />
            {/* <h2 style={{margin: 'auto'}}><b>Новые модели</b></h2> */}
            <AutoList />
        <div className="Main-content">
            {/* <BrandBar /> */}
            
            {/* <Pages /> */}
        </div>
        <BookingForm />
        </div>
    );
});

export default Main;