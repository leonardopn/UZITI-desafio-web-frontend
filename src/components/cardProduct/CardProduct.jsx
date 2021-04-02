import React from 'react';
import ContUnit from "../contUnit/ContUnit"
import recycle_color_32 from "../../img/recycle_color_32.svg"
import "./cardProduct.css";

const CardProduct = (props) => {
    let iconRecycle = <img id="icon-recycle" src={recycle_color_32} alt="recycle_icon"></img>;

    if (!props.details.recycle) {
        iconRecycle = "";
    }

    return (
        <div className="card-product">
            <div className="div-img">
                <img src={props.img} alt="product_img"></img>
            </div>

            <h1>{props.title}</h1>
            <h2>{props.details.unit + " Unit - " + props.details.desc} {iconRecycle}</h2>
            <h3>{"RD$" + props.price.toFixed(2) + "/Unit"}</h3>
            <p>{props.promotion}</p>
            <a href="/home">View details</a>
            <ContUnit max={props.details.unit}></ContUnit>
        </div>
    );
}

export default CardProduct;