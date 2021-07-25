import React from 'react'

const AuthForm = (props) => {
  const {
    handleChange, 
    handleSubmit, 
    btnText, 
    errMsg,
    inputs: {
      username,
      password
    } 
  } = props
  
  return (
    
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={username} 
        name="username" 
        onChange={handleChange} 
        placeholder="Username"/>

      <input 
        type="password" 
        value={password} 
        name="password" 
        onChange={handleChange} 
        placeholder="Password"/>
 <br/>     
      <button className="sform">{ btnText }</button>
      
      <p style={{color: "#B22234", textAlign: "center", fontWeight:"bold"}} >{ errMsg }</p>
    
    </form>
  )
}

export default AuthForm;