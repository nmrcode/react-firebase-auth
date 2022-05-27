import React from "react";
import { LOGIN_ROUTE } from "../utils/consts/routes";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { Navigate } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <h1>Welcome</h1>

      <button onClick={() => dispatch(removeUser())}>
        Log out from {email}
      </button>
    </div>
  ) : (
    <Navigate replace to={LOGIN_ROUTE} />
  );
};

export default HomePage;
