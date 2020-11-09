import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { Button } from "@material-ui/core";
import { connect } from "react-redux";
import { addTodo, updateTodo, clearCurrent } from "../../actions/todoAction";

const TodoForm = ({ todo, addTodo, updateTodo, clearCurrent }) => {
  const { current } = todo;
  const [input, setInput] = useState("");

  useEffect(() => {
    if (current !== null) {
      setInput(current.name);
    } else {
      setInput("");
    }
  }, [current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addTodo({
        name: input,
      });
    } else {
      updateTodo({
        _id: current._id,
        name: input,
      });
    }

    clearCurrent();
    setInput("");
  };

  return (
    <>
      <form className="todo-form">
        <input
          type="text"
          placeholder="Add a todo"
          value={input}
          name="text"
          className="todo-input"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button className="todo-btn" variant="outlined" onClick={handleSubmit}>
          {current ? "Update Todo" : "Add Todo"}
        </Button>
      </form>
      {current && (
        <button className="clear-btn" onClick={() => clearCurrent()}>
          Clear
        </button>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, { addTodo, updateTodo, clearCurrent })(
  TodoForm
);
