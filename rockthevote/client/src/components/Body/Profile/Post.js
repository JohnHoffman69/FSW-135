import React, { useState } from 'react'
import "./Main.css";
const initInputs = {
  votes: "",
  subject: "",
  description: ""
}

export default function Post(props){

    const [inputs, setInputs] = useState(initInputs)
    const { addIssue } = props
  
    function handleChange(e){
      const {name, value} = e.target
      setInputs(prevInputs => ({
        ...prevInputs,
        [name]: value
      }))
    }
  
    function handleSubmit(e){
      e.preventDefault()
      addIssue(inputs)
      setInputs(initInputs)
    }
  
    const { votes, subject, description } = inputs
  return (
<section className="panel important">
          <h2>Post an issue</h2>
          <form onSubmit={handleSubmit}>
            <div className="twothirds">
              <label for="name">Topic:</label>
              <input
                type="text"
                name="subject"
                id="name"
                value={subject}
                onChange={handleChange} 
                placeholder="List your topic here."
              />
              <label for="textarea">Description:</label>
              <textarea
                cols="40"
                rows="8"
                name="textarea"
                id="textarea"
                value={description}
                onChange={handleChange} 
                placeholder="Give a detailed description."
              ></textarea>
            </div>
            <div className="onethird">
              <legend>Your view</legend>
              <label for="radio-choice-1">
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-1"
                  value={votes}
                />{" "}
                YES
              </label>
              <label for="radio-choice-2">
                <input
                  type="radio"
                  name="radio-choice"
                  id="radio-choice-2"
                  value={votes}
                />{" "}
                NO
              </label>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </div>
          </form>
        </section>
  );
};
