import userService from "../services/user.service";
import { types } from "../types/types";

export const listUsers = () => async (dispatch) => {
  try {
    let payload = [];
    const res = await userService.getAll();

    if (res.status === 200) {
      payload = res.data.data;
    }
    dispatch({
      type: types.list,
      payload: payload,
    });
  } catch (error) {
    console.log(error);
  }
};

export const createUser = (data) => async (dispatch) => {
  try {
    const res = await userService.create(data);
    dispatch({
      type: types.add,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
  }
};
