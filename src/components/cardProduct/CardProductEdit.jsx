import React from 'react';
import { getProducts } from "../../store/actions/products.action";
import { connect } from "react-redux";
import "./cardProduct.css";

const CardProduct = (props) => {
    const { informations } = props;
    if (informations.recycle) informations.recycle = "checked";

    const [inputData, setInputData] = React.useState({ ...informations });

    function setCheckBox(value) {
        if (value) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <div className="card-product-edit">
            <div className="div-img">
                <img src={informations.img} alt="product_img"></img>
            </div>
            <label>Title: </label>
            <input className="input-default" type="text" value={inputData.title} onChange={e => setInputData({ ...inputData, title: e.target.value })}></input>
            <label>Unit: </label>
            <input className="input-default" type="text" value={inputData.unit} onChange={e => setInputData({ ...inputData, unit: e.target.value })}></input>
            <label>Desc. Unit: </label>
            <input className="input-default" type="text" value={inputData.description} onChange={e => setInputData({ ...inputData, description: e.target.value })}></input>
            <label>Price: </label>
            <input className="input-default" type="text" value={inputData.price} onChange={e => setInputData({ ...inputData, price: e.target.value })}></input>
            <label>Promotion Information: </label>
            <input className="input-default" type="text" value={inputData.promotion} onChange={e => setInputData({ ...inputData, promotion: e.target.value })}></input>
            <div>
                <label>Recyclable: </label>
                <input type="checkbox" checked={inputData.recycle} value={inputData.recycle} onChange={e => setInputData({ ...inputData, recycle: e.target.checked })}></input>
            </div>

            <button className="button_cancel" onClick={e => props.actionCancel.fun(props.actionCancel.param)}>Cancel</button>
            <button className="button_save">Save</button>
        </div>
    );
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