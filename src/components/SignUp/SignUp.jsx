import React from "react";
import { useDispatch } from "react-redux";
import BaseForm from "../BaseForm/BaseForm";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { setUser } from "../../store/slices/userSlice";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch(console.error);
  };

  return <BaseForm title="Зарегистрироваться" handleClick={handleRegister} />;
};

export default SignUp;
