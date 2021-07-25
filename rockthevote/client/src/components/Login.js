  
import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm.js'
import { UserContext } from '../context/UserProvider.js'


const initInputs = { username: "", password: "" }

const Login = () => {
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(false)

  const { signup, login, errMsg } = useContext(UserContext)

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const handleSignup = (e) => {
    e.preventDefault()
    signup(inputs)
  }

  const handleLogin = (e) => {
    e.preventDefault()
    login(inputs)
  }

  const toggleForm = () => {
    setToggle(prev => !prev)
  }

  return (
    <div className="loginBox">
      <h1>Rock The Vote</h1>
      { !toggle ?
        <>
        <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleLogin}
            inputs={inputs}
            btnText="Login"
            errMsg={errMsg}
          />
          <button onClick={() => toggleForm()}>Sign Up</button>
        </>
        :
        <>
        <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign Up"
            errMsg={errMsg}
          />
          <button onClick={() => toggleForm()}>Sign In</button>
        </>
     
      
      }
    </div>
  )
}

export default Login;