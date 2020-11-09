import {
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_TODO,
  UPDATE_TODO,
  TODO_ERROR,
  CLEAR_TODO,
} from "./types";
import axios from "axios";

// Get todo
export const getTodo = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/todo");
    dispatch({
      type: GET_TODO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// Add todo

export const addTodo = (todo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.post("/api/todo", todo, config);
    dispatch({
      type: ADD_TODO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// Clear Items
export const clearItems = () => (dispatch) => {
  dispatch({
    type: CLEAR_TODO,
  });
};

// Clear Current

export const clearCurrent = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT,
  });
};

// Delete Todo

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/todo/${id}`);
    dispatch({
      type: DELETE_TODO,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// Update todo

export const updateTodo = (todo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.put(`/api/todo/${todo._id}`, todo, config);
    dispatch({
      type: UPDATE_TODO,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: TODO_ERROR,
      payload: err.response.data.msg,
    });
  }
};

// Set Current

export const setCurrent = (todo) => (dispatch) => {
  dispatch({
    type: SET_CURRENT,
    data: todo,
  });
};
