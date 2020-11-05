import {
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_TODO,
  UPDATE_TODO,
} from "./types";

export const getTodo = () => (dispatch) => {
  dispatch({
    type: GET_TODO,
  });
};

export const addTodo = (todo) => (dispatch) => {
  dispatch({
    type: ADD_TODO,
    data: todo,
  });
};

export const clearCurrent = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

export const deleteTodo = (id) => (dispatch) => {
  dispatch({
    type: DELETE_TODO,
    data: id,
  });
};

export const setCurrent = (todo) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    data: todo,
  });
};

export const updateTodo = (todo) => (dispatch) => {
  dispatch({
    type: UPDATE_TODO,
    data: todo,
  });
};
