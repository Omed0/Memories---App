// import {  } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { AUTH } from '../constants/actionTypes.js';

export const Signin = (formData, location) => async (dispatch) => {
    try {
        const { data } = await api.singnIn(formData)

        dispatch({ type: AUTH, data })

        location.go('/')
    } catch (error) {
        console.log(error)
    }
}


export const Signup = (formData, location) => async (dispatch) => {
    try {
        const { data } = await api.singnUp(formData)

        dispatch({ type: AUTH, data })

        location.go('/')
    } catch (error) {
        console.log(error)
    }
}