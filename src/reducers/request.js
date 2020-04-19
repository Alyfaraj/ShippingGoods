import { ADD_REQUEST, SET_REQUEST } from "../actions/Types";
import Request from "../models/Request";

const initialState = {
    requests: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_REQUEST:
            const newRequest = new Request(
                Math.random().toString(),
                action.request.shippingType,
                action.request.from,
                action.request.to,
                0,
                action.request.date
            )

            return {
                ...state,
                requests: state.requests.concat(newRequest)
            }

        case SET_REQUEST: {
            return {
                ...state,
                requests: action.requests
            }
        }
        default:
            return state;
    }
}

export default reducer;