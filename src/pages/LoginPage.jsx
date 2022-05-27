import React from "react";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/consts/routes";
import { Link } from "react-router-dom";
import BaseForm from "../components/BaseForm/BaseForm";
import Login from "../components/Login/Login";
const LoginPage = () => {
  return (
    <div>
      <Typography.Title level={2} style={{ marginBottom: "20px" }}>
        Войти
      </Typography.Title>
      <Login />
      или <Link to={REGISTER_ROUTE}> зарегистрироваться</Link>
    </div>
  );
};

export default LoginPage;
