
import types from "../types"

const initialState = {
    arrayProducts: []
}

export default function configsReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_PRODUCTS:
            return {
                arrayProducts: action.payload
            };
        default:
            return state;
    }
}