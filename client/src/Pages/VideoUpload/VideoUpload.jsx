import React from 'react'
import './VideoUpload.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { uploadVideo } from '../../actions/video'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
function VideoUpload({setvidUploadPage}) {
    const currentUser=useSelector(state=>state.currentUserReducer)
    const dispatch=useDispatch();
    const [Title, setTitle] = useState("")
    const [VideoFile, setVideoFile] = useState("")
    const handleVideoFile=(e)=>{
        setVideoFile(e.target.files[0]);
    }
    const [progress, setprogress] = useState(0)
    const fileOptions={
         onUploadProgress:(progressEvent)=>{
            const {loaded, total}=progressEvent;
            const percentage=Math.floor(((loaded/1000)*100)/(total));
            setprogress(percentage)
            if(percentage===100)
            setTimeout(function(){},3000)
            
         }
    }
    const submitVideoFile=()=>{
        if(!Title){
            alert("Please Enter Title for your Video")
        }else if(!VideoFile){
            alert("Please Upload Your Video")
        }else if(VideoFile> 1000000){
            alert("Please Upload File less than 1Kb")
        }
        else{
            const fileData= new FormData();
            fileData.append("File",VideoFile)
            fileData.append("Title",Title)
            fileData.append("chanel",currentUser?.result._id)
            fileData.append("uploader",currentUser?.result.name)
           
            dispatch(uploadVideo({
                fileData:fileData, 
                fileOptions:fileOptions
            }));
        }
    }
  return (
    
     <div className='container_VidUpload'>
      <input type="submit" value={"X"} name='text' className='ibtn_x' onClick={()=>setvidUploadPage(false)}  />
    
    <div className="container2_VidUpload">
        <div className="ibox_div_vidupload">
       <input type="text"
       onChange={(e)=>{setTitle(e.target.value)}}
          className='ibox_VidUpload'
          maxLength={30}
          placeholder='Enter Title for your Video'
       />
    
    <label htmlFor="file" className='ibox_VidUpload ibtn_VidUpload'>
        <input type="file" className='ibox_VidUpload'
        name='file' style={{fontSize:"1rem"}}
        onChange={(e)=>handleVideoFile(e)}
       />
    </label>
    </div>
    <div className="ibox_div_vidupload">
        <input type="submit" value="Upload" className='ibox_VidUpload ibtn_VidUpload'
        onClick={()=>{submitVideoFile()}} />
    </div>
    <div className="loader ibox_div_vidupload">
        <CircularProgressbar
        value={progress}
        text={`${progress}`}
        styles={
            buildStyles({
                rotation:0.25,
                strokeLinecap:"butt",
                textSize:"20px",
                pathTransitionDuration:0.5,
                pathColor:`rgba(255,255,255,${progress/100})`,
                textColor:"#f88",
                trailColor:"#adff2f",
                backgroundColor:"#3e98c7"
            })
        }
        />
    </div>
    </div>
    </div>
   
   
  )
}

export default VideoUpload
