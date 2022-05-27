import React from "react";
import { Button, Form, Input, Typography } from "antd";
import { Link } from "react-router-dom";
import { LOGIN_ROUTE, REGISTER_ROUTE } from "../utils/consts/routes";

const RegisterPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 2,
      }}
      labelAlign={"left"}
      wrapperCol={{
        span: 22,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item>
        <Typography>
          Если у вас есть аккаунт, можете
          <Link to={LOGIN_ROUTE}> залогиниться</Link>
        </Typography>
      </Form.Item>

      <Button
        type="primary"
        htmlType="submit"
        style={{ display: "block", width: "100%" }}
      >
        Зарегистрироваться
      </Button>
    </Form>
  );
};

export default RegisterPage;
