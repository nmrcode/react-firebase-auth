import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/consts/routes";
import SignUp from "../components/SignUp/SignUp";

const RegisterPage = () => {
  return (
    <div>
      <Typography.Title level={2} style={{ marginBottom: "20px" }}>
        Зарегистрироваться
      </Typography.Title>
      <SignUp />
      или <Link to={LOGIN_ROUTE}> войти под существующем аккаунтом</Link>
    </div>
  );
};

export default RegisterPage;
