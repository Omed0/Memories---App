// import {  } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const Signin = (formData, location) => async (dispatch) => {
    try {
        const { data } = await api.singnIn(formData)

        location.go('/')
    } catch (error) {
        console.log(error)
    }
}


export const Signup = (formData, location) => async (dispatch) => {
    try {
        //sign up the user

        location.go('/')
    } catch (error) {
        console.log(error)
    }
}