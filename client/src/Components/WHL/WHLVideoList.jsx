import React from 'react'
import ShowVideoList from '../ShowVideoList/ShowVideoList'

function WHLVideoList({page,videoList,isLibraryPage}) {
  return (
    <>
      {
        videoList.map(m=>{
          return(
            <>

              <div
          key={m._id}
          className={`video_box_app ${isLibraryPage ? 'library_showvideo' : ''}`}
        >
          <ShowVideoList videoId={m._id} />
        </div>
            
            </>
          )
        })
      }
    </>
  )
}

export default WHLVideoList
