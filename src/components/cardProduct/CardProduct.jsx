import React from 'react';
import ContUnit from "../contUnit/ContUnit"
import recycle_color_32 from "../../img/recycle_color_32.svg"
import edit_color_24 from "../../img/edit_color_24.svg"
import CardProductEdit from "./CardProductEdit"
import "./cardProduct.css";

const CardProduct = (props) => {
    const { informations } = props;
    let iconRecycle = <img id="icon-recycle" src={recycle_color_32} alt="recycle_icon"></img>;

    if (!informations.recycle) {
        iconRecycle = "";
    }

    const cardDefault =
        <div className="card-product">
            <button className="button_blue" id="button_edit" onClick={e => setCardProduct(<CardProductEdit actionCancel={{fun: setCardProduct, param: cardDefault}} informations={{ ...informations }} />)}><img style={{ verticalAlign: "middle" }} src={edit_color_24} alt="edit_icon"></img></button>
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

    const [cardProduct, setCardProduct] = React.useState(cardDefault);

    return (
        cardProduct
    );
}

export default CardProduct;