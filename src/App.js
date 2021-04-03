import './App.css';
import React from 'react';
import ContainerProducts from "./components/containerProducts/ContainerProducts";
import { connect } from "react-redux";
import { getProducts } from "./store/actions/products.action"

function App(props) {
	React.useEffect(() =>{
		props.getProducts()
	});

	return (
		<div className="App">
			<ContainerProducts></ContainerProducts>
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

export default connect(null, mapDispatchToProps)(App);
