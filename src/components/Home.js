import React from "react";
// import Homepage from "./Homepage";
import Notes from "./Notes";

export default function Home(props) {
    const {showAlert} = props;
  return (
    <>  
       {/* <Homepage/> */}
      {/* <Notes /> */}
      
      
                <Notes showAlert={showAlert} />                 
            

    </>
      
      
    
  );
}
