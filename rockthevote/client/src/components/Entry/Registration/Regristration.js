import React from "react";
import "./Registration.css";

const Registration = (props) => {
  
  return (
    <div>
      <div className="container">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Sign up here!</h2>
            <h4 className="animation a2">Choose your username and password</h4>
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
                <button type="submit" id="lgn-btn" className="animation a5">
                  SUBMIT!
                </button>
                <button onClick={() => props.setToggle(false)} id="sgn-btn" className="animation a5">
                  GO BACK
                </button>
              <br />
            </div>
          </form>
        </div>
        <div className="sgn-right"></div>
      </div>
    </div>
  );
};

export default Registration;