import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload };
        case 'signup':
            return { errorMessage: '', token: action.payload };
        default:
            return state;
    }
};
const signup = (dispatch) => async ({ email, password, role }) => {
    //make api request
    try {
        const respone = await trackerApi.post('/signup', { email, password, role });
        await AsyncStorage.setItem('token', respone.data.token);
        dispatch({ type: 'signup', payload: respone.data.token })

        //navigate to main flow
        //navigate('TrackList');
    }
    catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
};

const signin = (dispatch) => {
    return ({ email, password, role }) => {

    };
};

const signout = (dispatch) => {
    return () => {

    };
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signout, signup },
    { token: null, errorMessage: '' , role:''}
);
