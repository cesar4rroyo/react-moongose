import { types } from "../types/types";

const initialState = [];
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.add:
      return [...state, action.payload];
    case types.list:
      return action.payload;
    default:
      return state;
  }
};
