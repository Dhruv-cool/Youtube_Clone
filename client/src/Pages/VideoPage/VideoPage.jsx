import React, { useEffect } from 'react'
import vid from '../../Components/Video/vid.mp4'
import './VideoPage.css'
import LikeShareDots from './LikeShareDots'
import { useState } from 'react'
import {AiOutlineBell} from 'react-icons/ai'
import {MdOutlineSort} from 'react-icons/md'
import Comments from '../../Components/Comments/Comments'


function VideoPage() {
  const [SubsBtn, setSubsBtn] = useState(false)
  
  const toggleSubsBtn=()=>{
    if(SubsBtn){
      setSubsBtn(false);
    }
    else{
      setSubsBtn(true);
    }
  }
 
  return (
    <>
      <div className="container_videopage">
      <div className="container2_videopage">
        <div className="video_display_screen_videopage">
            <video src={vid}
            className={"video_showVideo_VideoPage"}
            controls
            autoPlay></video>
             <div className="video_details_videopage">
         <p className="video_btn_title_videopage">Create Website in 5 mins</p>
         <div className="views_date_btns_videopage">
           <div className="chanel_details">
              <div className="chanel_subscribed">
                <img src="https://source.unsplash.com/200x200/?game" alt="" />
           </div>
            <div className='chanel_name_subs'>
            <pre className='chanel_name'>CodeWithHArry</pre>
            <pre className='subscribers_videopage' >4 Subscribers</pre>
            </div>
              <div className="join_subscribe_btn">
                <button className='join_btn'>Join</button>
                <div onClick={()=>toggleSubsBtn()}>
                {SubsBtn ? (
                     <><button className='subscribed_btn'>
                      <AiOutlineBell size={22} className='bell_icon'/>
                      Subscribed</button></>
                ):(
                       <> <button className='subscribe_btn'>Subscribe</button></>
                )}
              </div>
               
                
            </div>
            <LikeShareDots/>
          </div>
          <div className="views_upload_description">
            <div className="views_upload">
              5 views  uploaded 1 year ago
            </div>
          </div>
          <div className="comments_section">
            <p>4533 Comments</p>
            <MdOutlineSort size={22} className='Sort_icon'/>
            <p>Sort by</p>
            </div>
        </div>
        <Comments/>
        </div>
          </div>
          <div className="more_contents">
          <p>More COntents</p>
        </div>
        </div>
        
      </div>
      
    </>
  )
}

export default VideoPage
