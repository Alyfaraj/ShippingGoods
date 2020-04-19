import { ADD_REQUEST, SET_REQUEST } from "./Types";
import { loading } from "./index";
import Request from "../models/Request";
import { loadingHistory } from "./ui-actions";


export const addRequest = (from, to, shippingType, date) => {
    return (dispatch,getState) => {
        const userId=getState().auth.userId;
        const token=getState().auth.token;

        const requestData = {
            id: Math.random().toString(),
            shippingType: shippingType,
            from: from,
            to: to,
            state: 0,
            date: date
        }
        dispatch(loading(true))
         fetch(`https://enter-app-d9a8e.firebaseio.com/Requests/${userId}.json?auth=${token}`, {
            method: 'POST',
            body: JSON.stringify(requestData)
        })
            .catch(err => {
                console.log(err)
            })
            .then(res => res.json())
            .then(parsres => {
                dispatch(loading(false))
                console.log(parsres)
                
            })
    }
}

export const getRequests = () => {
    return (dispatch,getState) => {
        const userId=getState().auth.userId;
        dispatch(loadingHistory(true))
        return fetch(`https://enter-app-d9a8e.firebaseio.com/Requests/${userId}.json`)
            .then(resopne => resopne.json())
            .then(parsedRes => {
                const Requests = [];
                for (let key in parsedRes) {
                    Requests.push(new Request(
                        key,
                        parsedRes[key].shippingType,
                        parsedRes[key].from,
                        parsedRes[key].to,
                        parsedRes[key].state,
                        parsedRes[key].date))
                }
                dispatch(loadingHistory(false))
                dispatch(setPlaces(Requests))
            }).catch(err => {
                dispatch(loadingHistory(false))
                alert(err)
            })

    }
}

export const setPlaces = requests => {
    return { type: SET_REQUEST, requests: requests }
}
