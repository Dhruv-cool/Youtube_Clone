import React from 'react'
import './Showvideo.css'
import { Link } from 'react-router-dom'
function ShowVideo({vid}) {
  return (
    <>
      <Link to={`/videopage/${vid?._id}`}>
        <div>
        <video
        src={`${vid?.video_src}`}
        className='video_showvideo '
        ></video>
        </div>
        
        </Link>
        <div className="video_description">
            <div className="chanel_subscribed">
                <img src="https://source.unsplash.com/200x200/?game" alt="" />
            </div>
            <div className="vedio_details">
                <p className='title_video_showvideo'>{vid?.title}</p>
                <pre className="upload_video_showvideo">{vid?.Chanel}</pre>
                <pre className='upload_video_showvideo'>
                    5 views <div className='dot'></div> uploaded 1 year ago
                </pre>
            </div>
        </div>
    </>
  )
}

export default ShowVideo
