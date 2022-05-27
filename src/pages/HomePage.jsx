import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts/routes";

const HomePage = () => {
  let navigate = useNavigate();

  useEffect(() => {
    return navigate(LOGIN_ROUTE);
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
