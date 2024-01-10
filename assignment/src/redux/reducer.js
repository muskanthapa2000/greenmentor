import { GET_DATA_SUCCESSFULLY } from "./actiontype";

const initialState = {
  data: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_SUCCESSFULLY:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
