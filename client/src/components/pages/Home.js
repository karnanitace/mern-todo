import React, { useEffect } from "react";
import TodoList from "../layout/TodoList";
import { connect } from "react-redux";
import { loadUser } from "../../actions/authAction";

const Home = ({ auth, loadUser }) => {
  const { isAuthenticated, user } = auth;

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="todo">
      <TodoList />
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loadUser })(Home);
