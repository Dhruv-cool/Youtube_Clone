import React from 'react'
import './Home.css'
import LeftSideBar from '../../Components/LeftSidebar/LeftSideBar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
import vid from '../../Components/Video/vid.mp4'

function Home() {
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
      const Navlist =[
        "All",
        "Comedy",
        "Horror",
        "Anime",
        "Phython",
        "Java",
        
        
      ]
      
   
      
  return (
    <div className='container_pages_App'>
      <LeftSideBar/>
      <div className="container2_pages_App ">
        <div className="Navigation_Home"   >
          {
            Navlist.map(m=>{
              return(
                <p key={m} className='btn_nav_home'>{m}</p>
              )
            }
              )
          }
        </div>
        <ShowVideoGrid vids={vids}/>
       
      </div>
    </div>
  )
}

export default Home
