import React from 'react';
import './TabItem.css';

export function TabItem ({text}) {
    const [showMessage, setShowMessage] = React.useState("button not clicked")
 const clickMe = () => {
        console.log("ki")
        setShowMessage ("button clicked") 
        
    }
    
    return (
        <div className="tab-item">
<button className="button" onClick={clickMe} >{text}</button>
{showMessage}
        </div>
    )
}