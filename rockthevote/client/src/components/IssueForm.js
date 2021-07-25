import React, { useState } from 'react'

const initInputs = {
  title: "",
  description: ""
}

export default function IssueForm(props){
  const [inputs, setInputs] = useState(initInputs)
  const { createIssue } = props

  const handleChange = (e) => {
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    createIssue(inputs)
    setInputs(initInputs)
  }

  const { title, description} = inputs
  return (
    <div className = "loginBox">
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={handleChange} 
        placeholder="Topic"/>
      <input 
        type="text" 
        name="description" 
        value={description} 
        onChange={handleChange} 
        placeholder="Description"/>
      <button>Submit Issue</button>
    </form>
    </div>
  )
}