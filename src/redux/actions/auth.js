import { REGISTER_SUCCESS, REGISTER_FAIL } from './type';
import axios from 'axios';
import { api_route } from '../../utils/route';
import { ToastAndroid } from 'react-native';
import { fetchQuoteOfTheDay } from './quote';

export const register = ({
  name,
  email,
  password,
  gender,
  age
}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password, age, gender });
  // console.log('action');
  console.log('axios', api_route + '/api/user');
  // console.log(body);
  try {
    const res = await axios.post(`${api_route}/api/user`, body, config);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });
  } catch (err) {
    ToastAndroid.show(err.response.data.errors[0].msg, ToastAndroid.SHORT);
  }
};

export const login = ({ email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`${api_route}/api/auth`, body, config);
    dispatch({ type: REGISTER_SUCCESS, payload: res.data });

    //dispatch(fetchQuoteOfTheDay());
  } catch (err) {
    ToastAndroid.show(err.response.data.errors[0].msg, ToastAndroid.SHORT);
  }
};
