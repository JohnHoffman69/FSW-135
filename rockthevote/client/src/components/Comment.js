import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider'

export default function Comment(props) {
  const { addCommentLike, addCommentDislike, getCommentsForIssue } = useContext(UserContext)
  const { _id, username, issueId } = props
  
  function addLike (event) {
    addCommentLike(event, issueId)
    getCommentsForIssue(issueId)
  }

  function addDislike(event){
    addCommentDislike(event, issueId)
    getCommentsForIssue(issueId)
  }

  return (
    <div key={_id} id={_id} className='comment'>
      <p><strong>Comment: {props.comment}</strong></p>
      <span><em>@{username}</em></span>
      <br />
      <span><em>Upvote: {props.likes}</em></span>
      <br />
      <span><em>Downvote: {props.dislikes}</em></span>
      <br />
      <button onClick={addLike}>Upvote</button>
      <button onClick={addDislike}>Downvote</button>
    </div>
  )
}