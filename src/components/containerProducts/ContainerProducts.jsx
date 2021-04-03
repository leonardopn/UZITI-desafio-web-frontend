import React from 'react';
import { connect } from "react-redux";
import "./containerProducts.css";

const ContainerProducts = (props) => {
    return (
        <div className="container_products">
            {props.products.arrayProducts}
        </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, null)(ContainerProducts);