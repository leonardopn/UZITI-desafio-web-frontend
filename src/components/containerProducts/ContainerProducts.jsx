import React from 'react';
import CardProduct from "../cardProduct/CardProduct";
import { connect } from "react-redux";
import "./containerProducts.css";

const ContainerProducts = (props) => {

    function formatComponent(arrayProducts) {
        const arrayTemp = []

        arrayProducts.forEach(product => {
            const recycle = product.recycle === 1 ? true : false;
            arrayTemp.push(<CardProduct key={product.id} informations={{ ...product, recycle }}></CardProduct>)
        });
        return arrayTemp;
    }

    return (
        <div className="container_products">
            {formatComponent(props.arrayProducts)}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        arrayProducts: state.products.arrayProducts
    }
}

export default connect(mapStateToProps, null)(ContainerProducts);