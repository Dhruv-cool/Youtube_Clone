import React from 'react'
import WHL from '../../Components/WHL/WHL'
import vid from '../../Components/Video/vid.mp4'
function Watchlater() {
  const watchHistoryVideo = [
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
  return (
    <>
      <WHL page={"Watch Later"} videoList={watchHistoryVideo}/>
    </>
  )
}

export default Watchlater
