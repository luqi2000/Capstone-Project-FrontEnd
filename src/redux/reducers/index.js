import { ADD_TO_CART, REMOVE_FROM_CART, SAVE_USER } from "../actions";

const initialState = {
  user: null,
  content: {}
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productsToAdd, userId } = action.payload;
      return {
        ...state,
        content: {
          ...state.content,
          [userId]: [...(state.content[userId] || []), productsToAdd]
        }
      };
    case REMOVE_FROM_CART:
      const { index, userId: userIdToRemove } = action.payload;
      const updatedContent = state.content[userIdToRemove].filter((_, i) => i !== index);
      return {
        ...state,
        content: {
          ...state.content,
          [userIdToRemove]: updatedContent
        }
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
