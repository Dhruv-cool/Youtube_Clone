import React from 'react'
import {AiOutlineLike} from 'react-icons/ai'
import {AiOutlineDislike} from 'react-icons/ai'
import {RiShareForwardLine} from 'react-icons/ri'
import {LiaDownloadSolid} from 'react-icons/lia'
import {PiDotsThreeBold} from 'react-icons/pi'
import {AiFillDislike} from 'react-icons/ai'
import {AiFillLike} from 'react-icons/ai'
import { useState } from 'react'
import './LikeShareDot.css'
function LikeShareDots() {
    const [Dislikebtn, setDislikebtn] = useState(false)
    const [Likebtn, setLikebtn] = useState(false)

    const toggleLikeBtn=()=>{
        if(Likebtn){
            if(Dislikebtn){
                setLikebtn(false);
                setDislikebtn(true);
            }
            else{
                setLikebtn(false);
            }
            
        }else {
            setLikebtn(true);
            setDislikebtn(false);
        }
    }
    
    const toggleDisLikeBtn=()=>{
        if(Dislikebtn){
            if(Likebtn){
                setDislikebtn(false);
                setLikebtn(true);
            }
            else{
                setDislikebtn(false)
            }
           
        }else{
            setDislikebtn(true);
            setLikebtn(false);
        }
    }
  return (
    <>
      <div className="btn_like_share_dots">
        <div className="btns_all">
            <div className="btn_like" onClick={()=>toggleLikeBtn()}>
                {Likebtn ? (
                     <>                <AiFillLike
                     size={22} className='like_sign'/></>
                ):(
                       <>                <AiOutlineLike
                       size={22} className='like_sign'/></>
                )}

                <p>48</p>
            </div>
            <div className="btn_dislike" onClick={()=>toggleDisLikeBtn()}>
                {(Dislikebtn)? (
                     <><AiFillDislike size={22} className='dislike_sign'/></>
                ):(
                     <><AiOutlineDislike size={22} className='dislike_sign'/></>
                )}
                
            </div>
        </div>
        <div className="btns_all">
            <div className="btn_share">
                <RiShareForwardLine className='share_sign' size={22}/>
                <p>Share</p>
            </div>
        </div>
        <div className="btns_all">
            <div className="btn_download">
                <LiaDownloadSolid size={22} className='download_sign' />
                <p>Download</p>
            </div>
        </div>
        <div className="btns_all" id='btns_dot'>
            <PiDotsThreeBold size={22} className='dot_sign'/>
        </div>
      </div>
    </>
  )
}

export default LikeShareDots
