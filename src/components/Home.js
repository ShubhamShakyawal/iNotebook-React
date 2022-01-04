import React from "react";
import Homepage from "./Homepage";
import Notes from "./Notes";
import { useLocation} from "react-router-dom";

export default function Home(props) {
    const {alert,showAlert} = props; 
    let location = useLocation();

  return (
    <> 
      {localStorage.getItem('token')?<Notes showAlert={showAlert} />:<Homepage alert={alert}/>}
      </>
  );
}
