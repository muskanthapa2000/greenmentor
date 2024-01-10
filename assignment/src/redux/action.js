import { GET_DATA_SUCCESSFULLY } from "./actiontype";
import axios from 'axios';

export const getSuccess = (payload) => {
  return {
    type: GET_DATA_SUCCESSFULLY,
    payload: payload,
  };
};

export const gettingDataSuccess = () => async (dispatch) => {
  try {
    const response = await axios.get(`https://render-json-zr3u.onrender.com/data`);
    dispatch(getSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};