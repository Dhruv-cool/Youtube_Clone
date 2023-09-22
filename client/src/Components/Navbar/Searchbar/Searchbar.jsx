import React, { useState } from 'react'
import './SearchBar.css'
import { FaSearch } from "react-icons/fa";
import { BsMicFill } from "react-icons/bs";
import SearchList from './SearchList.jsx';

function Searchbar() {
  const [searchQuery, setSearchQuery]=useState("");
  const [seachListA, setsearchList] = useState(false)

  const TitleArray=["video1","video2","Animation video","Movies","Songs"].filter(q=>q.toUpperCase().includes(searchQuery.toUpperCase()))
  return (
    <div className='Search_Container'>
      <div className="Search_Container2">
        <div className="search_div" >
         
            <input type="text" className="Box_SearchBox" placeholder='Search' 
            onChange={e=>setSearchQuery(e.target.value)}
            value={searchQuery}
            onClick={e=>{
              setsearchList(true)}}
          
            />
         
            
            < FaSearch className="searchIcon_SearchBar"
            onClick={e=>setsearchList(false)}
            />
            < BsMicFill className="MicIcon_SearchBar"/>
            {searchQuery&&seachListA&&
              <SearchList
               setSearchQuery={setSearchQuery}
               TitleArray={TitleArray}
              />
            }
        </div>
      </div>
    </div>
  )
}

export default Searchbar

