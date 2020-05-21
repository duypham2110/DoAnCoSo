import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const profReducer = (state, action) => {
    switch (action.type) {
        case 'get_profile':
            return action.payload;
        default:
            return state;
    }
}

const getProf = (dispatch) => {
    return async () => {
        const response = await trackerApi.get('/profile/1710156')

        dispatch({ type: 'get_profile', payload: response.data });
        navigate('Profile');
    }
}

const postProf = (dispatch) => async ({ mssv, hovaten, malop,tinhtranghoc,ngaysinh,noisinh,dantoc,tongiao,email,sdt,cmnd,diachi }) => {
    try {
        const response = await trackerApi.post(`/profile/${mssv}`,{ mssv, hovaten, malop,tinhtranghoc,ngaysinh,noisinh,dantoc,tongiao,email,sdt,cmnd,diachi })
        navigate('Profile');
        //dispatch({ type: 'resetpassword', payload: respone.data.msg })
    }
    catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong when reset password'
        })
    }
}

export const { Provider, Context } = createDataContext(
    profReducer,
    {getProf,postProf},
    { data: '', errorMessage: '' }
);