import React from 'react'
// import Navbar from './Navbar';
// import Notes from './Notes';
import image1  from "../1.png";
import image2  from "../2.png";
import image3  from "../3.png";
export default function Homepage() {
    return (
        <>
            <img src={image1} alt="image1" style={{width:'100%'}}/> 
            <img src={image2} alt="image2" style={{width:'100%'}}/>
            <img src={image3} alt="image3" style={{width:'100%'}}/>
            
        </>
    )
}
