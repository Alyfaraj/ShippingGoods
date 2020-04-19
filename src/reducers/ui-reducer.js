import { LOADING, LOADING_HISTORY } from "../actions/Types";

const intialstate = {
    isLoading: false,
    isLoadingHistory:false
}

const reducer = (state = intialstate, action) => {
    switch (action.type) {
        case LOADING: {
            return {
                ...state,
                isLoading: action.value
            }
        }
        case LOADING_HISTORY:
            return{
                ...state,
                isLoadingHistory:action.value
            }
        default:
            return state;
    }
}
export default reducer;