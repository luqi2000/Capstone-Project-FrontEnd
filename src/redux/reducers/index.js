import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_USER } from "../actions";

const initialState = {
  content: [],
  user: null
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,

        content: [...state.content, action.payload]
      };
    case REMOVE_FROM_CART:
      return {
        ...state,

        content: state.content.filter((_, i) => i !== action.payload)
      };
    case SAVE_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
export default mainReducer;
