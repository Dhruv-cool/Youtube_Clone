import React from 'react'
import vid from '../../Components/Video/vid.mp4'
import LeftSideBar from '../../Components/LeftSidebar/LeftSideBar'
import './Library.css'
import {FaHistory} from 'react-icons/fa'
import {MdOutlineWatchLater} from 'react-icons/md'
import WHLVideoList from '../../Components/WHL/WHLVideoList'
import { AiOutlineLike } from 'react-icons/ai'

function Library() {
  const vids = [
    {
      _id: 1,
    video_src: vid,
   Chanel: "Plzbot",
    title: "Roast of Myself",
    uploadtime:"1-12-2022",
    Uploder: "abc",
    description: "description of  video 1",
  },
  {
    _id: 2,
    video_src: vid,
    Chanel: "The Homies",
   title: "Life in a Nutshell",
   uploadtime:"12-01-2023",
   Uploder: "abc",
    description: "description of  video 2",
  },
  {
    _id: 3,
    video_src: vid,
    Chanel: "Manifesters",
    title: "The Funniest moments in India",
    uploadtime:"3-08-2023",
    Uploder: "abc",
    description: "description of  video 3",
  },
  {
    _id: 4,
    video_src: vid,
    Chanel: "Planetography",
      title: "Beauty of the Planet Earth",
      uploadtime:"12-12-2022",
        Uploder: "abc",
        description: "description of  video 3",
      },
    
    {
     _id: 5,
     video_src: vid,
     Chanel: "Planetography",
       title: "Beauty of the Planet Earth",
       uploadtime:"12-12-2022",
         Uploder: "abc",
         description: "description of  video 3",
       },
       {
         _id: 6,
         video_src: vid,
         Chanel: "Planetography",
           title: "Beauty of the Planet Earth",
           uploadtime:"12-12-2022",
             Uploder: "abc",
             description: "description of  video 3",
           },
     ];
    const isLibraryPage=true;
  return (
    <div className='container_pages_App'>
    <LeftSideBar/>
    <div className="container2_pages_App ">
      <div className="conatiner_librarypage">
          
            <h1 className="container_title_library">
              <b><FaHistory/></b>
              <b>History</b>
            </h1>
            <div className="container_videolist_libararypage">
              <WHLVideoList
              page={"History"} videoList={vids}
              isLibraryPage={isLibraryPage}
              />
            </div>
          
      </div>
      <div className="conatiner_librarypage">
          
          <h1 className="container_title_library">
            <b><MdOutlineWatchLater/></b>
            <b>Watch Later</b>
          </h1>
          <div className="container_videolist_libararypage">
            <WHLVideoList
            page={"Watch Later"} videoList={vids}
            isLibraryPage={isLibraryPage}
            />
          </div>
        
    </div>
    <div className="conatiner_librarypage">
          
          <h1 className="container_title_library">
            <b><AiOutlineLike/></b>
            <b>Liked Video</b>
          </h1>
          <div className="container_videolist_libararypage">
            <WHLVideoList
            page={"Liked Video"} videoList={vids}
           isLibraryPage={isLibraryPage}
            />
          </div>
        
    </div>
   
    </div>
  </div>
  )
}

export default Library
