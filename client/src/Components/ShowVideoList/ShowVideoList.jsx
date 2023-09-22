import React from 'react'
import vid from '../../Components/Video/vid.mp4'
import ShowVideo from '../Showvideo/ShowVideo';
function ShowVideoList({videoId}) {
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
  return (
    <div className='container_ShowVideGrid'>
    {
      vids?.filter(q=>q._id===videoId).map(vi=>
          {
              return (
                  
                  <div key={vi._id} className="video_box_app">
                     <ShowVideo vid={vi}/>
                  </div>
                  
                  
              )
          })
    }
  </div>
      
    
  )
}

export default ShowVideoList
