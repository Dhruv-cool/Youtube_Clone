import { useState , useEffect } from 'react';
import './App.css';
import Allroutes from './Components/Allroutes';
import Drawsliderbar from './Components/LeftSidebar/Drawsliderbar';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,

} from "react-router-dom";
import CreateEditChanel from './Pages/Chanel/CreateEditChanel';
import { useDispatch } from 'react-redux';
import { fetchAllChanel } from './actions/chanelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';


function App() {
  const dispatch=useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllChanel());
  }, [dispatch])
  
  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({
    display:"none",
  })
  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display==="none"){
      settoggleDrawerSidebar({
        display:"flex"
      })
    }
    else{
      settoggleDrawerSidebar({
        display:"none"
      })
    }
  }
  const [vidUploadPage, setvidUploadPage] = useState(false)
  const [createeditchanel, setcreateeditchanel] = useState(false)
  return (
    <Router>
      {
        vidUploadPage && <VideoUpload setvidUploadPage={setvidUploadPage}/>
      }
      {
        createeditchanel && <CreateEditChanel setcreateeditchanel={setcreateeditchanel}/>
      }
      
      <Navbar
      toggleDrawer={toggleDrawer}
      setcreateeditchanel={setcreateeditchanel}/>
      {
        <Drawsliderbar
        toggleDrawer={toggleDrawer}
       toggleDrawerSidebar={toggleDrawerSidebar}/> 
      }
      <Allroutes setcreateeditchanel={setcreateeditchanel} setvidUploadPage={setvidUploadPage}/>
  </Router>
  );
}

export default App;
