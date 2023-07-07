const initialState = {
  cart: {
    content: []
  }
};
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          content: [...state.cart.content, action.payload]
        }
      };
    default:
      return state;
  }
};
export default mainReducer;
