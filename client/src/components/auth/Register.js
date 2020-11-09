import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alertAction";
import { register, clearError, loadUser } from "../../actions/authAction";

const Register = ({
  history,
  auth,
  setAlert,
  register,
  clearError,
  loadUser,
}) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { error, isAuthenticated } = auth;

  const { name, email, password, password2 } = user;

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/");
    }

    if (!error && isAuthenticated) {
      loadUser();
    }

    if (error === "User already exist") {
      setAlert(error, "danger");
      clearError();
    }

    // eslint-disable-next-line
  }, [error, isAuthenticated, history]);

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords donot match", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="form-container">
      <h1>
        Account <spam className="text-primary">Register</spam>
      </h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            className="log-input"
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email Adddress</label>
          <input
            type="text"
            name="email"
            className="log-input"
            value={email}
            onChange={onChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            className="log-input"
            value={password}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            name="password2"
            className="log-input"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
          />
        </div>

        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
  auth: state.auth,
});

export default connect(mapStateToProps, {
  setAlert,
  register,
  clearError,
  loadUser,
})(Register);
