import React from 'react'
import './LeftSidebar.css'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineSubscriptions } from 'react-icons/md'
import { MdOutlineVideoLibrary } from 'react-icons/md'
import {GrHistory} from 'react-icons/gr'
import {RiVideoLine} from 'react-icons/ri'
import {MdOutlineWatchLater} from 'react-icons/md'
import {AiOutlineLike} from 'react-icons/ai'
import {MdOutlineKeyboardArrowDown} from 'react-icons/md'
import shorts from './shortsoutline.png'
import { NavLink } from 'react-router-dom'
function Drawsliderbar({toggleDrawer,toggleDrawerSidebar}) {
  return (
    <div className='container_drawsliderbar' style={toggleDrawerSidebar}>
        <div className="container2_drawsliderbar">
         <div className="drawer_leftsidebar">
            <NavLink to={'/'}  className="icon_sidebar_div">
                <p>
                    <AiOutlineHome
                    size={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>Home</div>
                </p>
                
            </NavLink>
            <div className="icon_sidebar_div">
                <p>
                    <img src={shorts}
                    width={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>Shorts</div>
                </p>
                
            </div>
            <div className="icon_sidebar_div">
                <p>
                    <MdOutlineSubscriptions
                    size={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>Subscriptions</div>
                </p>
                
            </div>
         </div>
         <div className='drawer_leftsidebar'>
         <NavLink to={'/Library'} className="icon_sidebar_div">
                <p>
                    <MdOutlineVideoLibrary
                    size={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>Library</div>
                </p>
                
            </NavLink>
            <NavLink to={'/History'} className="icon_sidebar_div">
                <p>
                    <GrHistory
                    size={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>History</div>
                </p>
                
            </NavLink>
            <NavLink to={'/your_videos'} className="icon_sidebar_div">
                <p>
                    <RiVideoLine
                    size={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>Your videos</div>
                </p>
                
            </NavLink>
            <NavLink to={'/Watch_later'} className="icon_sidebar_div">
                <p>
                    <MdOutlineWatchLater
                    size={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>Watch Later</div>
                </p>
                
            </NavLink>
            <NavLink to={'/liked_videos'} className="icon_sidebar_div">
                <p>
                    <AiOutlineLike
                    size={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>Liked videos</div>
                </p>
                
            </NavLink>
            <div className="icon_sidebar_div">
                <p>
                    <MdOutlineKeyboardArrowDown
                    size={22}
                    className='icon_sidebar'
                    style={{
                        margin:"auto 0.2rem"
                    }}/>
                    <div className="text_slidebar_icon" style={{margin:"auto 1.3rem"}}>Show More</div>
                </p>
                
            </div>
         </div>
         <div className="Subscription_box">
            <p className='text_div'>Subscriptions</p>
            <div className="chanel_subscribed">
                <img src="https://source.unsplash.com/200x200/?game" alt="" />
                <p>Triggered</p>
            </div>
            <div className="chanel_subscribed">
                <img src="https://source.unsplash.com/200x200/?youtuber" alt="" />
                <p>Triggered</p>
            </div>
            <div className="chanel_subscribed">
                <img src="https://source.unsplash.com/200x200/?cartoon" alt="" />
                <p>Triggered</p>
            </div>
            <div className="chanel_subscribed">
                <img src="https://source.unsplash.com/200x200/?computer" alt="" />
                <p>Triggered</p>
            </div>
            <div className="chanel_subscribed">
                <img src="https://source.unsplash.com/200x200/?nature" alt="img" />
                <p>Triggered</p>
            </div>
         </div>
        </div>
        
      <div className="container3_drawsliderbar" 
      onClick={()=>toggleDrawer()}
      >
        
      </div>
    
    </div>
  )
}

export default Drawsliderbar
