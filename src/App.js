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


function App() {
  
   

   const [alert, setAlert] = useState('success');
  
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
            <Navbar/> 
            <Alert alert={alert} />
            <div className="container">           
               <Routes>
                  <Route exact path="/" element={<Home showAlert={showAlert} />}/>
                  <Route exact path="/about" element={<About/>}/>
                  <Route exact path="/login" element={<Login showAlert={showAlert} />}/>
                  <Route exact path="/signup" element={<Signup showAlert={showAlert} />}/>
               </Routes> 
               </div>
        </Fragment>        
       </Router>
       </NoteState>
    </>
  );
}

export default App;
