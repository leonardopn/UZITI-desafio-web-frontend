import React from 'react';
import ContUnit from "../contUnit/ContUnit";
import recycle_color_32 from "../../img/recycle_color_32.svg";
import edit_color_24 from "../../img/edit_color_24.svg";
import arrow_color_left_24 from "../../img/arrow_color_left_24.png";
import arrow_color_right_24 from "../../img/arrow_color_right_24.png";
import { connect } from "react-redux";
import { getProducts } from "../../store/actions/products.action";
import axios from "axios";
import "./cardProduct.css";

const CardProduct = (props) => {
    const [type, setType] = React.useState("CREATED");
    const { informations } = props;
    let iconRecycle = <img id="icon-recycle" src={recycle_color_32} alt="recycle_icon"></img>;

    const [inputData, setInputData] = React.useState({ ...informations });

    function setCheckBox(value) {
        if (value) {
            return 1;
        }
        else {
            return 2;
        }
    }

    function updateProduct() {
        const data = {
            ...inputData,
            recycle: setCheckBox(inputData.recycle)
        }

        let status = true;
        if (data.unit < 1) {
            alert("Unit cannot be less than 1");
            status = false;
        }
        if (data.price < 1) {
            alert("Price cannot be less than 1");
            status = false;
        }

        if (!data.title || !data.unit || !data.price || !data.description || !data.recycle) {
            alert("Fill in the empty spaces");
            status = false;
        }

        if (status) {
            axios.post("http://localhost:3542/updateProduct", data).then(res => {
                props.getProducts();
                setType("CREATED");
            }).catch(err => {
                alert(err);
                setType("CREATED");
            })
        }
    }

    if (!informations.recycle) {
        iconRecycle = "";
    }


    function changeOrder(position) {
        let data = {
            oldOrder: informations.ordination,
            currentOrder: informations.ordination + 1,
            newOrder: informations.ordination + 1,
            id: informations.id
        }

        if (position === "BACK") {
            data = {
                oldOrder: informations.ordination,
                currentOrder: informations.ordination - 1,
                newOrder: informations.ordination - 1,
                id: informations.id
            }
            if (informations.ordination > 0) {
                axios.post("http://localhost:3542/updateOrder", data).then(resp => {
                    props.getProducts();
                }).catch(err => console.log(err))
            }
        }
        else {
            if (informations.ordination < informations.collectionLength - 1) {
                axios.post("http://localhost:3542/updateOrder", data).then(resp => {
                    props.getProducts();
                }).catch(err => console.log(err))
            }
        }
    }

    switch (type) {
        case "EDIT":
            return <div className="card-product-edit">
                <div className="div-img">
                    <img src={informations.img} alt="product_img"></img>
                </div>
                <label>Title: </label>
                <input className="input-default" type="text" value={inputData.title} onChange={e => setInputData({ ...inputData, title: e.target.value })}></input>
                <label>Unit: </label>
                <input className="input-default" min="1" type="number" value={inputData.unit} onChange={e => setInputData({ ...inputData, unit: e.target.value })}></input>
                <label>Desc. Unit: </label>
                <input className="input-default" type="text" value={inputData.description} onChange={e => setInputData({ ...inputData, description: e.target.value })}></input>
                <label>Price: </label>
                <input className="input-default" min="1" type="number" value={inputData.price} onChange={e => setInputData({ ...inputData, price: e.target.value })}></input>
                <label>Promotion Information: </label>
                <input className="input-default" type="text" value={inputData.promotion} onChange={e => setInputData({ ...inputData, promotion: e.target.value })}></input>
                <div>
                    <label>Recyclable: </label>
                    <input type="checkbox" checked={inputData.recycle} value={inputData.recycle} onChange={e => setInputData({ ...inputData, recycle: e.target.checked })}></input>
                </div>

                <button className="button_cancel" onClick={e => {
                    setType("CREATED");
                    setInputData({ ...informations });
                }}>Cancel</button>
                <button className="button_save" onClick={e => updateProduct()}>Save</button>
            </div>;
        default:
            return <div className="card-product">
                <button className="button_blue" onClick={e => changeOrder("BACK")}><img style={{ verticalAlign: "middle" }} src={arrow_color_left_24} alt="edit_icon"></img></button>
                <button className="button_blue" id="button_edit" onClick={e => setType("EDIT")}><img style={{ verticalAlign: "middle" }} src={edit_color_24} alt="edit_icon"></img></button>
                <button className="button_blue" onClick={e => changeOrder()}><img style={{ verticalAlign: "middle" }} src={arrow_color_right_24} alt="edit_icon"></img></button>
                <div className="div-img">
                    <img src={informations.img} alt="product_img"></img>
                </div>
                <h1>{informations.title}</h1>
                <h2>{informations.unit + " Unit - " + informations.description} {iconRecycle}</h2>
                <h3>{"RD$" + informations.price.toFixed(2) + "/Unit"}</h3>
                <p>{informations.promotion}</p>
                <a href="/home">View details</a>
                <ContUnit max={informations.unit}></ContUnit>
            </div>;
    }
}

const mapDispatchToProps = dispatch => {
    return (
        {
            getProducts() {
                const action = getProducts();
                action.payload.then(value => {
                    action.payload = value;
                    dispatch(action);
                });
            }
        }
    )
}

export default connect(null, mapDispatchToProps)(CardProduct);