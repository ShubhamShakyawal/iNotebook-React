import './App.css';
import { Fragment,useState} from 'react';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NoteState from './context/notes/NoteState';
import {Alert} from './components/Alert';
import Login from './components/Login';
import Signup from './components/Signup';
import Homepage from './components/Homepage';
import image1  from "./1.png";
import image2  from "./2.png";
import image3  from "./3.png";

function App() {
  
   const pathname = window.location;
   console.log(pathname);
   const [alert, setAlert] = useState('null');
  
  const showAlert = (message,type) =>{
      setAlert({
          msg: message,
          type: type
      });
      setTimeout(() => {
        setAlert('null');
      }, 1500);
  }
  return (
    <>
 
    <NoteState>
       <Router>
          <Fragment>
            
            <Navbar /> 
            {/* <img src={image1} alt="image1" style={{width:'100%'}}/> */}
             {/* {pathname.pathname==='/' ? <Homepage/>: } */}
            <div style={{height:'50px'}}
            ></div>
            <Alert alert={alert} />
            <div className=" m-0 p-0">           
               <Routes>
                  {/* <Route exact path="/" element={<Homepage/>}/> */}
                  <Route exact path="/" element={<Home alert={alert} showAlert={showAlert} />}/>
                  <Route exact path="/about" element={<About/>}/>
                  <Route exact path="/login" element={<Login showAlert={showAlert} />}/>
                  <Route exact path="/signup" element={<Signup showAlert={showAlert} />}/>
               </Routes> 
               </div>
               {/* <img src={image2} alt="image2" style={{width:'100%'}}/> */}
               {/* <img src={image3} alt="image3" style={{width:'100%'}}/> */}
        </Fragment>        
       </Router>
       </NoteState>
    </>
  );
}

export default App;
