import React from 'react';
import ContUnit from "../contUnit/ContUnit"
import recycle_color_32 from "../../img/recycle_color_32.svg"
import "./cardProduct.css";

const CardProduct = (props) => {
    let iconRecycle = <img id="icon-recycle" src={recycle_color_32} alt="recycle_icon"></img>;

    const { informations } = props;

    if (!informations.recycle) {
        iconRecycle = "";
    }

    return (
        <div className="card-product">
            <div className="div-img">
                <img src={informations.img} alt="product_img"></img>
            </div>
            <h1>{informations.title}</h1>
            <h2>{informations.unit + " Unit - " + informations.description} {iconRecycle}</h2>
            <h3>{"RD$" + informations.price.toFixed(2) + "/Unit"}</h3>
            <p>{informations.promotion}</p>
            <a href="/home">View details</a>
            <ContUnit max={informations.unit}></ContUnit>
        </div>
    );
}

export default CardProduct;