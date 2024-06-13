import React, { useState } from 'react';
import './App.css';

const Show = ({ name, description, onDelete ,buttonDesign}) => {
    const [bgColor, setBgColor] = useState('');
    const [iconclr,seticonclr]=useState("");
    const [windowclr,setwindowsclr]=useState("")
    
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("HandleSubmit called");
        setBgColor("#87CEEB");
        seticonclr("#228B22");
        setwindowsclr("#0000FF")
    }

    return (
        <>
        <div className="row p-2 m-5 showmargin " style={{ backgroundColor: bgColor }}>
        <div className='col-sm-1 '><i className="fa-solid fa-circle-check fontsize" style={{color:iconclr}}></i></div>
            <div className='col-sm-1'>
            <i className="fa-brands fa-windows fontsizewindow " style={{color:windowclr}}></i>
            </div>
            <div className='col-sm-4'>
                <h6>{name}</h6>
                <h6>{description}</h6>
            </div>
            <div className='col-sm-4'>
                <button style={buttonDesign}onClick={handleSubmit}>Take Decision</button>
            </div>
            <span className='col-sm-1'>
                <span className='deletecursor' onClick={onDelete}><i className="fa-solid fa-trash"></i></span>
                
            </span>
        </div>
       
        </>

        
    );
}

export default Show;
