import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const statReducer = (state, action) => {
    switch (action.type) {
        case 'get_khoa':
            return { ...state, khoa: action.payload };
        case 'get_lop':
            return { ...state, lop: action.payload };
        case 'get_data':
            return { ...state, data: action.payload };

    }
}

const getKhoa = (dispatch) => {
    return async () => {
        const response = await trackerApi.get(`/khoa`)
        dispatch({ type: 'get_khoa', payload: response.data });
    }
}

const getLop = (dispatch) => async (makhoa) => {
    const response = await trackerApi.get(`/lop?makhoa=${makhoa}`)
    dispatch({
        type: 'get_lop',
        payload: response.data
    })
}

const getData = (dispatch) => async (mssv, hovaten, malop, gioitinh) => {

    const response = await trackerApi.get(`/sinhvien?mssv=${mssv}&&hovaten=${hovaten}&&malop=${malop}&&gioitinh=${gioitinh}`)

    dispatch({
        type: 'get_data',
        payload: response.data
    })

    navigate('DataTable');
}

export const { Provider, Context } = createDataContext(
    statReducer,
    { getKhoa, getLop, getData },
    { lop: [], khoa: [], data: [] }
);
