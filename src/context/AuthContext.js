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
        response.data.role === 'AD' ? navigate('QtvFlow') : navigate('SvFlow');
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
        const respone = await trackerApi.post('/signup', { email, password, role });
        await AsyncStorage.setItem('token', respone.data.token);
        await AsyncStorage.setItem('role', respone.data.role);
        dispatch({ type: 'signup', payload: respone.data.token })

        //navigate to main flow
        //navigate('TrackList');
    }
    catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '', role: '' }
);
