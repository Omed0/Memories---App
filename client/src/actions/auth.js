import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';
import { redirect } from 'react-router-dom';


export const signin = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        redirect('/');

    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        redirect('/');

    } catch (error) {
        console.log(error);
    }
};
