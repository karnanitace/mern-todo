import {
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_TODO,
  UPDATE_TODO,
} from "../actions/types";

const initialState = {
  todos: [],
  current: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.data, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.data),
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.data,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.data.id ? action.data : todo
        ),
      };
    default:
      return state;
  }
};
