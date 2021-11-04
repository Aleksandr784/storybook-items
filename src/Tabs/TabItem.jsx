import React from 'react';
import './TabItem.css';

export function TabItem ({text}) {
    
    
    return (
        <div className="tab-item">
<button className="button"  >{text}</button>
        </div>
    )
}