export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SAVE_USER = "SAVE_USER";

export const addToCartAction = (productsToAdd, userId) => {
  return { type: ADD_TO_CART, payload: { productsToAdd, userId } };
};

export const removeFromCartAction = (index, userId) => {
  return { type: REMOVE_FROM_CART, payload: { index, userId } };
};

export const saveUserAction = userId => {
  return { type: SAVE_USER, payload: userId };
};
