import React from 'react'
import './Comments.css'
function DisplayComments({userCommented,commentbody}) {
  return (
    <>
        <div className="container_display_commented">
        <div className="chanel_subscribed comment_photo display_photo" >
                <img src="https://source.unsplash.com/200x200/?game" alt="" />
           </div>
        <div className="display_comments_div">
            <p className="user_commented">{userCommented} 1 year ago</p>
            <p className="commented_body">{commentbody}</p>
        </div>
        </div>
       
    </>
  )
}

export default DisplayComments
