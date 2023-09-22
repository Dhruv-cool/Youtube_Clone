import React from 'react'
import { FaEdit, FaUpload } from 'react-icons/fa'
import './DescribeChanel.css'
import { useSelector } from 'react-redux'
function DescribeChanel({setcreateeditchanel,Cid,setvidUploadPage}) {
    const chanels=useSelector(state=>state?.chanelReducers)
   
    const currentChanel=chanels.filter(c=>c._id=== Cid)[0];
   
  return (
    <div className='container3_chanel'>
      <div className="chanel_logo">
        <b>{currentChanel?.name.charAt(0).toUpperCase()}</b>
      </div>
      <div className="description_chanel">
        <b>{currentChanel?.name}</b>
        <p>{currentChanel?.desc}</p>
      </div>
      <div className="editbtn_chanel" onClick={()=>{setcreateeditchanel(true)}}>
        <FaEdit/>
        <b>Edit Chanel</b>
      </div>
      <div className="uploadbtn_chanel" onClick={()=>{setvidUploadPage(true)}}>
        <FaUpload/>
        <b>Upload Video</b>
      </div>
    </div>
  )
}

export default DescribeChanel
