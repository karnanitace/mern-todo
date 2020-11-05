import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";

const Navbar = ({ title }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <AssignmentIcon className="todo-icon" /> {title}
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Todo List",
};

export default Navbar;
