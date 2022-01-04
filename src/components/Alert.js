import React from 'react'

export const Alert = (props) => {
    //  const capitalise = (word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    // let type = capitalise(props.alert.type)
    
    return (  
        
        props.alert && 
        <div  className={`alert alert-${props.alert.type} alert-dismissible fade show `} role="alert">
               <strong>{props.alert.type==='danger'?'Error:': props.alert.type}  </strong> {props.alert.msg}
                </div>

    )
}
