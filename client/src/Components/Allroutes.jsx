import React from 'react'
import {
    Routes,
    Route,
  
  } from "react-router-dom";
import Home from '../Pages/Home/Home';
import Library from '../Pages/Library/Library';
import Yourvideos from '../Pages/Your Videos/Yourvideos'

import History from '../Pages/Watch History/History';
import Likedvideos from '../Pages/Liked videos/Likedvideos';
import Watchlater from '../Pages/Watch Later/Watchlater';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Chanel from '../Pages/Chanel/Chanel';

function Allroutes({setcreateeditchanel , setvidUploadPage}) {
  return (
    <Routes>
        < Route path='/' element= {<Home/>}/>
        < Route path='/Library' element= {<Library/>}/>
        < Route path='/your_videos' element= {<Yourvideos/>}/>
        < Route path='/Watch_later' element= {<Watchlater/>}/>
        < Route path='/History' element= {<History/>}/>
        < Route path='/liked_videos' element= {<Likedvideos/>}/>
        < Route path='/videopage/:vid' element= {<VideoPage/>}/>
        < Route path='/chanelpage/:Cid' element= {<Chanel setcreateeditchanel={setcreateeditchanel} 
            setvidUploadPage={setvidUploadPage}        
        />}/>

    </Routes>
  )
}

export default Allroutes
