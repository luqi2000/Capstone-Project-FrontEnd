export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SAVE_USER = "SAVE_USER";

//ACTION CREATORS

export const addToCartAction = productsToAdd => {
  return { type: ADD_TO_CART, payload: productsToAdd };
};

export const removeFromCartAction = index => {
  return { type: REMOVE_FROM_CART, payload: index };
};

export const saveUserAction = user => {
  return { type: SAVE_USER, payload: user };
};
