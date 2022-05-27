import React from "react";
import HomePage from "../../pages/HomePage";
import { Route, Routes } from "react-router-dom";
import {
  HOME_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
} from "../../utils/consts/routes";
import LoginPage from "../../pages/LoginPage";
import RegisterPage from "../../pages/RegisterPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path={HOME_ROUTE} element={<HomePage />} />
      <Route path={LOGIN_ROUTE} element={<LoginPage />} />
      <Route path={REGISTER_ROUTE} element={<RegisterPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
