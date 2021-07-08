import React, { useState, useContext } from "react";
import Registration from "./Registration/Registration";
import Login from "./Login/Login";
import { UserContext } from "../../Context/UserProvider";

const initInputs = { username: "", password: "" };

export default function Auth() {
  const [inputs, setInputs] = useState(initInputs);
  const [toggle, setToggle] = useState(false);
  const { signup, login } = useContext(UserContext);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }

  function handleSignup(e) {
    e.preventDefault();
    signup(inputs);
  }

  function handleLogin(e) {
    e.preventDefault();
    login(inputs);
  }

  return (
    <div className="auth-container">
      {toggle ? (
        <Registration
          handleChange={handleChange}
          handleSubmit={handleSignup}
          setToggle={setToggle}
          inputs={inputs}
        />
      ) : (
        <Login
          handleChange={handleChange}
          handleSubmit={handleLogin}
          setToggle={setToggle}
          inputs={inputs}
        />
      )}
    </div>
  );
}