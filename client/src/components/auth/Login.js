import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertAction";
import { login, clearError, loadUser } from "../../actions/authAction";

const Login = ({ history, auth, setAlert, login, clearError, loadUser }) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { error, isAuthenticated } = auth;

  const { email, password } = user;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (!error && isAuthenticated) {
      loadUser();
    }

    if (error === "Invalid credentials ") {
      setAlert(error, "danger");
      clearError();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else {
      login({
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary"> Login </span>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            className="log-input"
            type="text"
            name="email"
            value={email}
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="log-input"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
          />
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
      <p>Dont have an account?</p>
      <Link to="/register" className="text-primary">
        Register Now
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  setAlert,
  login,
  clearError,
  loadUser,
})(Login);
