import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload.token, role: action.payload.role };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        case 'resetpassword':
            return { errorMessage: '', token: action.payload };
        case 'signout':
            return { token: null, errorMessage: '' };
        default:
            return state;
    }
};

const signin = dispatch => async ({ email, password }) => {
    try {
        const response = await trackerApi.post('/signin', { email, password });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('role', response.data.role);
        dispatch(
            {
                type: 'signin',
                payload:
                {
                    token: response.data.token,
                    role: response.data.role
                }
            }
        );

        const role = response.data.role;

        role === 'AD' ? navigate('QtvFlow') : navigate('SvFlow');
    } catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong with sign in'
        });
    }
};

const signup = (dispatch) => async ({ email, password, role }) => {
    //make api request
    try {
        const response = await trackerApi.post('/signup', { email, password, role });
        await AsyncStorage.setItem('token', response.data.token);
        await AsyncStorage.setItem('role', response.data.role);
        dispatch({ type: 'signup', payload: response.data.token })

        //navigate to main flow
        //navigate('TrackList');
    }
    catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
};

const resetpassword = (dispatch) => async ({ email, oldpassword, newpassword }) => {
    try {
        const response = await trackerApi.post('resetpassword', { email, oldpassword, newpassword })
        dispatch({ type: 'resetpassword', payload: respone.data.msg })
    }
    catch (err) {
        dispatch({
            type: 'add_error',
            payload: 'Something went wrong when reset password'
        })
    }
}

const signout = (dispatch) => {
    return async () => {
        await AsyncStorage.removeItem('token');
        dispatch({ type: 'signout' });
        navigate('loginFlow');
    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup, resetpassword },
    { token: null, errorMessage: '', role: '' }
);
