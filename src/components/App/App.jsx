import React from "react";
import { Row, Button, Col, Card } from "antd";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../AppRouter/AppRouter";

const App = () => {
  return (
    <BrowserRouter>
      <div className="site-card-border-less-wrapper">
        <Card title="Авторизация через Firebase" bordered={false}>
          <AppRouter />
        </Card>
      </div>
    </BrowserRouter>
  );
};

export default App;
