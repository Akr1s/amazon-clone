export const initialState = {
  basket: [],
  user: null,
};

export const ACTIONS = {
  ADD_TO_BASKET: "ADD_TO_BASKET",
  REMOVE_FROM_BUSKET: "REMOVE_FROM_BUSKET",
  INCREASE_QUANTITY: "INCREASE_QUANTITY",
  DECREASE_QUANTITY: "DECREASE_QUANTITY",
  SET_USER: "SET_USER",
  PAYMENT_SUCCESS: "PAYMENT_SUCCESS",
};

export const showBasketTotal = (basket) => {
  return basket?.reduce(
    (total, { price, quantity }) => +total + quantity * price,
    0
  );
};
export const showBasketLenght = (basket) => {
  return basket?.reduce((total, { quantity }) => +total + +quantity, 0);
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_BASKET:
      let quantityIndex = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );
      if (quantityIndex >= 0) {
        let temporaryBusket = [...state.basket];

        let resultBasket = temporaryBusket.map((item, index) => {
          if (index === quantityIndex) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
        return { ...state, basket: resultBasket };
      }
      return { ...state, basket: [...state.basket, action.item] };
    case ACTIONS.REMOVE_FROM_BUSKET:
      const newBasket = state.basket.filter(
        (basketItem) => basketItem.id !== action.id
      );
      return { ...state, basket: newBasket };
    case ACTIONS.INCREASE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        }),
      };
    case ACTIONS.DECREASE_QUANTITY:
      return {
        ...state,
        basket: state.basket.map((item) => {
          if (item.id === action.id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        }),
      };
    case ACTIONS.SET_USER:
      return { ...state, user: action.user };
    case ACTIONS.PAYMENT_SUCCESS:
      return { ...state, basket: [] };
    default:
      return state;
  }
};
