import React from 'react'

export const Alert = (props) => {
    //  const capitalise = (word)=>{
    //     const lower = word.toLowerCase();
    //     return lower.charAt(0).toUpperCase() + lower.slice(1);
    // }
    // let type = capitalise(props.alert.type)
    
    return (  
        
        props.alert && 
        <div  className={`alert position-static alert-${props.alert.type} alert-dismissible fade show mb-0`} style={{height:'65px'}} role="alert">
               <strong>{props.alert.type==='danger'?'Error:': props.alert.type} {props.alert==='null'?'':':'}   </strong> {props.alert.msg}
                </div>

    )
}
