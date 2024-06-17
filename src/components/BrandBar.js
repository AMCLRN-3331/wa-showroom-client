import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { ListGroup } from "react-bootstrap";

const BrandBar = observer(() => {
    const {auto} = useContext(Context);
    return (
        <ListGroup className="brand-filter mb-3">
            {auto.brands.map(brand => 
                <ListGroup.Item style={{cursor: 'pointer'}} active={brand.id === auto.selectedBrand.id} onClick={() => auto.setSelectedBrand(brand)} key={brand.id}>
                    {brand.name}
                </ListGroup.Item>
            )}
        </ListGroup>
    );
})

export default BrandBar;