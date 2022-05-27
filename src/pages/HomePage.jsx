import React from "react";
import { LOGIN_ROUTE } from "../utils/consts/routes";
import { useAuth } from "../hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/userSlice";
import { Navigate } from "react-router-dom";
import { Button, Typography } from "antd";

const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email, token, id } = useAuth();

  return isAuth ? (
    <div>
      <Typography.Title level={2}>
        Доброго времени суток, {email}
      </Typography.Title>
      <Typography.Title level={5}>Ваш id: {id}</Typography.Title>
      <Typography.Title level={5}>
        Ваш токен: {token}
        {token}
      </Typography.Title>

      <Button onClick={() => dispatch(removeUser())}>Выйти из аккаунта</Button>
    </div>
  ) : (
    <Navigate replace to={LOGIN_ROUTE} />
  );
};

export default HomePage;
