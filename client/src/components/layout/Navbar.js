import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

import { connect } from "react-redux";
import { logout } from "../../actions/authAction";
import { clearItems } from "../../actions/todoAction";

const Navbar = ({ title, auth, logout, clearItems }) => {
  const { isAuthenticated, user } = auth;

  const onLogout = () => {
    logout();
    clearItems();
  };

  const authLink = (
    <Fragment>
      <li>Hello {user && user.name} </li>
      <li>
        <a href="#!" onClick={onLogout}>
          <ExitToAppIcon />
        </a>
      </li>
    </Fragment>
  );

  const guestLink = (
    <Fragment>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <AssignmentIcon className="todo-icon" /> {title}
      </h1>
      <ul>{isAuthenticated ? authLink : guestLink}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Todo List",
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  todo: state.todo,
});

export default connect(mapStateToProps, { logout, clearItems })(Navbar);
