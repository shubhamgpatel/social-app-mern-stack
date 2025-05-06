import axios from 'axios';
import { loginStart, loginSuccess, loginFailure } from '../slices/authSlice';

// Action to log in a user
export const login = (credentials) => async (dispatch) => {
  dispatch(loginStart()); //need to check
  try {
    const response = await axios.post('http://localhost:5001/api/auth/login', credentials);
    console.log(response.data.token)
    dispatch(loginSuccess(response.data)); // Assuming response contains user data
  } catch (error) {
    dispatch(loginFailure(error.response.data.message || 'Something went wrong'));
  }
};
