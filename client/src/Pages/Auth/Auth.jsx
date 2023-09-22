import React from 'react'
import './Auth.css'
import { GoogleLogout } from 'react-google-login'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../actions/currentuser';
import { Link } from 'react-router-dom';
function Auth({User,setAuthBtn,setcreateeditchanel}) {
  const dispatch=useDispatch();
  const onLogoutSuccess=()=>{
       dispatch(setCurrentUser=null)
       alert("Log Out Successfull");
  }
  return (
    <div className='Auth_Container' onClick={()=>setAuthBtn(false)}>
      <div className="Auth_Container2">
        <div className="User_details">
          <div className="Chanel_logo_App">
            <p className="fstChar_logo_App">
                {
                  User?.result.name ?(
                    <>{User?.result.name.charAt(0).toUpperCase() }</>
                  ):(
                    <>{User?.result.email.charAt(0).toUpperCase()}</>
                  )
                }
            </p>
          </div>
          <div className="email_auth">{User?.result.email}</div>
        </div>
        <div className="btns_auth">
          {
            User?.result.name ? <>{
              <Link to={`/chanelpage/${User?.result._id}`} className='btn_auth'>
                Your Chanel

              </Link>
            }
            </>:
            <>
            <input type="submit" className='btn_auth' value="Create your Chanel" onClick={()=>setcreateeditchanel(true)}/>
            </>
          }
          
        
        <div>
          <GoogleLogout
          clientId={"313264821103-t4hcr9oaffmteiqq6g5dedk8shd4bmj6.apps.googleusercontent.com"}
          onLogoutSuccess={onLogoutSuccess}
          render={(renderProps)=>(
            <div className='btn_auth' onClick={renderProps.onClick}>
              <BiLogOut size={22}/>
              Log Out
            </div>

          )}
          />
        </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
