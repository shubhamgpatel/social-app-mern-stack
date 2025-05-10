import axios from 'axios';
import { loginStart, loginSuccess, loginFailure } from '../slices/authSlice';
// import { useNavigate } from 'react-router-dom';

// Action to log in a user
export const login = (credentials) => async (dispatch) => {
  // const navigate = useNavigate();
  dispatch(loginStart()); //need to check
  try {
    const response = await axios.post('http://localhost:5001/api/auth/login', credentials);
    console.log(response.data.token)
    dispatch(loginSuccess(response.data)); // Assuming response contains user data
    //navigate('/home');  
    //useNavigate() is a React hook, and hooks can only be used inside function components or custom hooks — not in plain JS files like your Redux actions.
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message || 'Something went wrong. Please try again later.';
    dispatch(loginFailure(errorMessage));
  }
};
