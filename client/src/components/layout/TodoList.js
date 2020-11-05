import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo } from "../../actions/todoAction";

const TodoList = () => {
  // const [todos, setTodos] = useState([]);

  return (
    <div className="todo-list">
      <h1>What's the plan for today?</h1>
      <TodoForm />

      <Todo />
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps)(TodoList);
