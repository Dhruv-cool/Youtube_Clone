import React from 'react'
import './CreateEditChanel.css'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { login } from '../../actions/auth';
import { updateChanelDate } from '../../actions/chanelUser';
function CreateEditChanel({ setcreateeditchanel }) {
  // const currentUser ={
  //     result: {
  //       email : "dhruv123@gmail.com",
  //       joinedOn: "2222-07-15T09:57:23.4892",
  //     },
  //   };
  const currentUser = useSelector(state => state.currentUserReducer)
  const [name, setname] = useState(currentUser?.result.name)
  const [desc, setdesc] = useState(currentUser?.result.desc)
  const dispatch = useDispatch();
  const handleSubmit = () => {
    if (!name) {
      alert("Please enter name");
    } else if (!desc) {
      alert("Please enter description");
    }
    else {
      dispatch(updateChanelDate(currentUser?.result._id, {
        name: name,
        desc: desc,
      }));
      setcreateeditchanel(false);
      setTimeout(() => {
        dispatch(login({ email: currentUser?.result.email }));
      }, 5000);
    }
  };
  return (
    <div className='conatiner_createeditchanel'>
      <input type="submit" value={"X"} name='text' className='ibtn_x' onClick={() => setcreateeditchanel(false)} />
      <div className="conatiner_createeditchanel2">
        <h1>{currentUser?.result.name ? <>Edit </> : <>Create </>}
          Your Chanel
        </h1>
        <input type="text" placeholder='Enter Your Chanel Name' className='ibox' name='text' value={name} onChange={(e) => setname(e.target.value)} />
        <textarea type="text" rows={15} className='ibox' placeholder='Enter Description' value={desc} onChange={(e) => setdesc(e.target.value)} />
        <input type="submit" className='ibtn' onClick={handleSubmit} />
      </div>
    </div>
  )
}

export default CreateEditChanel
