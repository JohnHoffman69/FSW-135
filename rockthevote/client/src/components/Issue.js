import React, { useContext, useState } from 'react'
import Comment from '../components/Comment'
import {UserContext} from '../context/UserProvider'
import CommentForm from '../components/CommentForm'

export default function Issue (props) {
  const [pComment, setPComment] = useState(false)
  const [displayComments, setDisplayComments] = useState(false)
  
  const {user: { username }, getCommentsForIssue, issueComments, getUserName, addLike, addDislike, getUserIssues} = useContext(UserContext)
  const { title, description,  _id } = props
  function togglePComment () {
    setPComment(prevState => !prevState)
  }

  function toggleDispComments () {
    setDisplayComments(prevState => !prevState)
    if(!displayComments){
      getCommentsForIssue(_id)
    }
  }

  function addALike (event) {
    addLike(event)
    getUserIssues()
  }

  function addADislike (event){
    addDislike(event)
    getUserIssues()
  }

  return (
    <div id={_id} key={_id} className = 'issue'>

      <h3>Topic: {title}</h3>
      <p>Issue: {description}</p>
      <p><em>Posted By: @{username}</em></p>
      <span><em>Upvotes:</em> {props.likes}</span>
      <br/>
      <span><em>Downvotes:</em> {props.dislikes}</span>
      <br/>

      {displayComments ?
      issueComments.map(comment => <Comment {...comment} key={comment._id} getUserName = {getUserName}/>) : 
      <button onClick={toggleDispComments}>View Comments</button>}

      {displayComments ? <button onClick={toggleDispComments}>Hide Comments</button> : ""}

      {pComment ? <CommentForm togglePComment = {togglePComment}/> : <button onClick={togglePComment}>Post a Comment</button>}
      {!displayComments ? <button onClick={addALike}>Upvote</button> : "" }
      {!displayComments ? <button onClick={addADislike}>Downvote</button> : ""}
      
      

    </div>
  )
}