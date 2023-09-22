import ShowVideo from '../Showvideo/ShowVideo'
import './ShowVideoGrid.css'
import React from 'react'

function ShowVideoGrid({vids , isLibraryPage}) {
  return (
    <div className={`container_ShowVideGrid ${isLibraryPage ? 'library_showvideo' : ''}`}>
      {
        vids?.map(vi=>
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

export default ShowVideoGrid
