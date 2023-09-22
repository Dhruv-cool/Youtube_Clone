import React from 'react'
import LeftSideBar from '../LeftSidebar/LeftSideBar'
import WHLVideoList from './WHLVideoList'
import './WHL.css'
function WHL({page,videoList,isLibraryPage}) {
  return (
    <div className='container_pages_App'>
      <LeftSideBar/>
      <div className="container2_pages_App ">
          <p className="det">
            <div className="whl_container">
            <div className="box_WHL leftside_WHL">
                <b>{page}</b>
                {
                  page==="History"&&
                  <div className="clear_history_btn">
                  Clear History
              </div>
                }
               
            </div>
            <div className="rightside_whl">
                <h1>{page}</h1>
                <div className="whl_list">
                    <WHLVideoList page={page} videoList={videoList} isLibraryPage={isLibraryPage}/>
                </div>
            </div>
            </div>
          
          </p>
        </div>
        </div>
  )
}

export default WHL
