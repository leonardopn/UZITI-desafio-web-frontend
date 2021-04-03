
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
        case types.UPDATE_VIEW_PRODUCTS:
            return {
                ...state,
                arrayProducts: action.payload
            };
        default:
            return state;
    }
}