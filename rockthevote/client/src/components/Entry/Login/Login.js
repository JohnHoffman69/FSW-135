import React from "react";
import "./Login.css";


const Login = (props) => {


  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome To DigiVote!</h2>
            <h4 className="animation a2">
              Log in to your account using username and password
            </h4>
          </div>
          <form onSubmit={props.handleSubmit}>
            <div className="form">
              <input
                className="form-field animation a3"
                type="text"
                value={props.username}
                name="username"
                onChange={props.handleChange}
                placeholder="Username"
              />
              <input
                className="form-field animation a4"
                type="text"
                value={props.password}
                name="password"
                onChange={props.handleChange}
                placeholder="Password"
              />
                <button type= "submit" id="lgn-btn" className="animation a5">
                  LOGIN
                </button>
                <button onClick={() => props.setToggle(true)} id="sgn-btn" className="animation a5">
                  SIGN UP
                </button>
            </div>
          </form>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Login;
