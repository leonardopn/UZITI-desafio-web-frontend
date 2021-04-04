import types from "../types";
import axios from "axios";
import CardProduct from "../../components/cardProduct/CardProduct";

function loadProductsFromAPI() {
    return new Promise((resolve, reject) => {
        try {
            axios.get("http://localhost:3542/getProducts").then(resp => {
                const arrayTemp = []
                resp.data.forEach(product => {
                    const recycle = product.recycle === 1 ? true : false;
                    arrayTemp.push(<CardProduct key={product.id} informations={{ ...product, recycle, collectionLength:  resp.data.length}}></CardProduct>)
                });

                resolve(arrayTemp);

            }).catch(err => console.log(err));
        }
        catch (err) {
            reject([]);
        }
    })
}

export function getProducts() {
    return {
        type: types.GET_PRODUCTS,
        payload: loadProductsFromAPI()
    }
}