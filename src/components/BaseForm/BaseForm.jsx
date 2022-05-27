import React, { useState } from "react";
import { Button, Form } from "antd";
import Input from "antd/es/input/Input";

const BaseForm = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Form>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: "Введите ваш email" }]}
      >
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Введите email"
        />
      </Form.Item>
      <Form.Item
        label="Пароль"
        name="password"
        rules={[{ required: true, message: "Введите ваш пароль" }]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Введите пароль"
        />
      </Form.Item>
      <Form.Item>
        <Button onClick={() => handleClick(email, password)}>{title}</Button>
      </Form.Item>
    </Form>
  );
};

export default BaseForm;
