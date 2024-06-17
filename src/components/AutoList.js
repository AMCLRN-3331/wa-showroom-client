import React, { useContext } from "react";
import {Context} from '../index';
import {observer} from 'mobx-react-lite';
import AutoItem from "./AutoItem";
import { Row } from "react-bootstrap";


const AutoList = observer(() => {
    const {auto} = useContext(Context);
    const brands = auto.brands;
    const models = auto.models;
    return (
        
        // <div>
        //     {auto.autos.map(auto =>
        //         <AutoItem key={auto.id} auto={auto} />
        //     )}
                // </div>

        <Row className="d-flex">
            {auto.autos.map(auto =>
                <AutoItem key={auto.id} auto={auto} brands={brands} models={models} />
            )}
        </Row>
    );
});

export default AutoList;