import "./button.css";
import { Routes, useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();
  const isRegistered = false;

  return (
    <>
      <h1>Press the button to proceed</h1>
      <button
        onClick={
          isRegistered ? navigate("/pages/welcome") : navigate("/pages/login")
        }
      ></button>
    </>
  );
};

export default Button;
