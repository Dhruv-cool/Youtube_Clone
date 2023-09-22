import React from 'react'
import './Comments.css'
import { useState } from 'react';
import DisplayComments from './DisplayComments';
function Comments() {
    const [comment, setComment] = useState('');
    const [isInputFocused, setInputFocused] = useState(false);
    const handleInputChange = (event) => {
        setComment(event.target.value);
      };
      
  const handleInputFocus = () => {
    setInputFocused(true);
  };

  const handleCancelClick = () => {
    setComment('');
    setInputFocused(false);
  };
  const handleSubmitClick = () => {
    // Process the comment here
    setComment('');
    setInputFocused(false);
  };
  const [CommentText, setCommentText] = useState("")
  const handleOnSubmit =(e) =>{
        e.preventDefault();
  }
  const commentsList =[
    {
        userCommented:"@vikasdubey123",
        commentbody:"You are the best"
    },
    {
        userCommented:"@vikasdubey123",
        commentbody:"You are the best"
    },
    {
        userCommented:"@vikasdubey123",
        commentbody:"You are the best"
    },
    {
        userCommented:"@vikasdubey123",
        commentbody:"You are the best"
    },
    {
        userCommented:"@vikasdubey123",
        commentbody:"You are the best"
    },
  ]
  return (
    <>
      <form className={`comments_sub_form_comments ${isInputFocused ? 'active' : ''}`}
      onSubmit={handleOnSubmit}>
      <div className="chanel_subscribed comment_photo" >
                <img src="https://source.unsplash.com/200x200/?game" alt="" />
           </div>
        <div className="input_container">
        <input type="text" 
         value={comment}
         
         onChange={(e)=>{handleInputChange(e);
             setCommentText(e.target.value);}}
         onFocus={handleInputFocus}
        placeholder='Add a comment..'
        className={`ibox_comment `}
        />
        {isInputFocused && (
        <div className="comments_btn_cancel_submit">
        <button onClick={handleCancelClick} className='btn_cancel'>Cancel</button>
        <button onClick={handleSubmitClick} className='btn_submit'>Comment</button>
      </div>
        )}
            </div>   
        
      </form>
      <div className="comment_display_container">
        {
            commentsList.map(m=>{
                return(
                    <DisplayComments
                    userCommented={m.userCommented}
                    commentbody={m.commentbody}
                    />
                )
            })
        }
        
      </div>
    </>
  )
}

export default Comments
