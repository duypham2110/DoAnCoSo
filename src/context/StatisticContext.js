import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const statReducer = (state, action) => {
    switch (action.type) {
        case 'get_khoa':
            return { ...state, khoa: action.payload };

    }
}

const getKhoa = (dispatch) => {
    return async () => {
        const response = await trackerApi.get(`/khoa`)
        dispatch({ type: 'get_khoa', payload: response.data });
    }
}


export const { Provider, Context } = createDataContext(
    statReducer,
    { getKhoa },
    { lop: '', khoa: '' }
);
