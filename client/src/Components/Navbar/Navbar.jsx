import React, { useEffect, useState } from 'react'
import logo from './logo.ico'
import './Navbar.css'
import Searchbar from './Searchbar/Searchbar'
import {RiVideoAddLine} from 'react-icons/ri'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {BiUserCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { gapi } from 'gapi-script'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../actions/auth'
import Auth from '../../Pages/Auth/Auth'


function Navbar({toggleDrawer,setcreateeditchanel}) {
 // const currentUser=null;
 const [AuthBtn, setAuthBtn] = useState(false)
  /*const currentUser ={
    result: {
      email : "dhruv123@gmail.com",
      joinedOn: "2222-07-15T09:57:23.4892",
    },
  };*/
const currentUser=useSelector(state=>state.currentUserReducer)
console.log(currentUser)
useEffect(()=>{
  function start(){
    gapi.client.init({
      clientId:"313264821103-t4hcr9oaffmteiqq6g5dedk8shd4bmj6.apps.googleusercontent.com",
      scope:"email",
    })
  }
  gapi.load("client:auth2",start);
},
[]);
const dispatch=useDispatch();
const onSuccess=(response)=>{
   const Email= response?.profileObj.email;
   console.log(Email);
   dispatch(login({email:Email}))
};
const onFailure=(response)=>{
       console.log("Failed",response);
};
  return (
    <>
    <div className='container_navbar'>
         <div className="burger_logo_navbar">
            <div className="burger" onClick={()=>toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <Link to={'/'} className="logo_navbar">
             <img src={logo} alt="" />
             <p className='logo_title'>YouTube</p>
            </Link>
            
         </div>
         
          <Searchbar/>
          <RiVideoAddLine size={22} className={"vid_bell_Navabar"}/>
          <IoMdNotificationsOutline size={22} className={"vid_bell_Navabar"}/>
         <div className="Auth_const_Navbar">
          {
            currentUser ? (
            <>
            <div className="Chanel_logo_App" onClick={()=>setAuthBtn(true)}>
              <p className="fstChar_logo_App">
                {
                  currentUser?.result.name?(
                    <>
                    {currentUser?.result.name.charAt(0).toUpperCase()}
                    </>
                  ):(
                    <>
                    {currentUser?.result.email.charAt(0).toUpperCase()}
                    </>
                  )
                }
              </p>
            </div>
            </>
            ):(
            <>
            <GoogleLogin
            clientId={"313264821103-t4hcr9oaffmteiqq6g5dedk8shd4bmj6.apps.googleusercontent.com"}
            onSuccess={onSuccess}
            onFailure={onFailure}
            render={(renderProps)=>(
              <div onClick={renderProps.onClick} className="Auth_Btn" >
              <BiUserCircle size={22}/>
              <b>Sign in</b>
            </div>
            )}
            />
          
            </>
            
          )}
          
         </div>

    </div>
    {
      AuthBtn&&
      <Auth
      setAuthBtn={setAuthBtn}
      setcreateeditchanel={setcreateeditchanel}
      User={currentUser}
      />
    }
    </>
  )
}

export default Navbar
