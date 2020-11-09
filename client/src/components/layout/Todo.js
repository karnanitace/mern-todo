import React, { useEffect } from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import {
  getTodo,
  deleteTodo,
  setCurrent,
  clearCurrent,
} from "../../actions/todoAction";

const Todo = ({ todo, getTodo, deleteTodo, setCurrent, clearCurrent }) => {
  const { todos } = todo;

  useEffect(() => {
    getTodo();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="todo-lists">
      <TransitionGroup>
        {todos.map((item) => (
          <CSSTransition key={item._id} timeout={500} className="item">
            <li className="list">
              {item.name}
              <span>
                <DeleteForeverIcon
                  className="delete-icon"
                  onClick={() => {
                    deleteTodo(item._id);
                    clearCurrent();
                  }}
                />
                <EditIcon
                  className="edit-icon"
                  onClick={() => setCurrent(item)}
                />
              </span>
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todo: state.todo,
});

export default connect(mapStateToProps, {
  getTodo,
  deleteTodo,
  setCurrent,
  clearCurrent,
})(Todo);
