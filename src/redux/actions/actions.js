import * as types from "./actionTypes";

export const AddPlayer = (name) => ({
  type: types.ADD_PLAYER,
  payload: name,
});

export const AddTotalPlayer = () => ({
  type: types.ADD_TOTAL_PLAYER,
});

export const DeletePlayer = (index) => ({
  type: types.DELETE_PLAYER,
  payload: index,
});
