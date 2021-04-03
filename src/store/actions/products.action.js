import types from "../types"
import axios from "axios"

function loadProductsFromAPI() {
    return new Promise((resolve, reject) => {
        try {
            axios.get("http://localhost:3542/getProducts").then(resp => {
                resolve(resp.data)

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