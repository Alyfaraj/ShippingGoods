import { AUTHENTICATE, LOGOUT } from './Types'
import AsyncStorage from '@react-native-community/async-storage';
import { loading } from "./index";

export const signUp = (email, password) => {
    return dsipatch => {
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        dsipatch(loading(true))
        return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB31y3EGVVEGpzkQ_pLRU0ZA1Fx9fOjEVc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .catch(err => {
                dsipatch(loading(false))
                alert(err)
            })
            .then(res => res.json())
            .then(parsedRes => {
                dsipatch(loading(false))
                dsipatch(authenticate(parsedRes.idToken,parsedRes.localId))
                saveDataToStorge(parsedRes.idToken, parsedRes.localId)


            })
    }
}

export const login = (email, password) => {
    return dsipatch => {
        const data = {
            email: email,
            password: password,
            returnSecureToken: true
        }
        dsipatch(loading(true))
        return fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB31y3EGVVEGpzkQ_pLRU0ZA1Fx9fOjEVc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).catch(err => {
            dsipatch(loading(false))
            alert(err)
        }).then(res => res.json())
            .then(parsedRes => {
                dsipatch(loading(false))
                dsipatch(authenticate(parsedRes.idToken, parsedRes.localId))
                saveDataToStorge(parsedRes.idToken, parsedRes.localId)

            })
    }
}


export const logout = () => {
    AsyncStorage.removeItem('userAuth');
    return { type: LOGOUT }
}



export const authenticate = (token, userId) => {
    return { type: AUTHENTICATE,  token: token , userId: userId};
};


const saveDataToStorge = (token, userId) => {
    AsyncStorage.setItem('userAuth', JSON.stringify({
        token: token,
        userId: userId
    }))
}


