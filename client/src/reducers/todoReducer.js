import {
  ADD_TODO,
  DELETE_TODO,
  SET_CURRENT,
  CLEAR_CURRENT,
  GET_TODO,
  UPDATE_TODO,
  TODO_ERROR,
  CLEAR_TODO,
} from "../actions/types";

const initialState = {
  todos: [],
  current: null,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case CLEAR_TODO:
      return {
        ...state,
        todos: [],
        current: null,
        error: null,
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
          todo._id === action.payload._id ? action.payload : todo
        ),
      };
    case TODO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
