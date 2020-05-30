import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import requestReducer from '../reducers/request';
import uiReducer from '../reducers/ui-reducer'
import authReducer from '../reducers/Auth'

const rootReducer = combineReducers(
    {   requests: requestReducer,
        ui: uiReducer,
        auth:authReducer
    }
);

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}


export default configureStore;