import React from 'react';
import './FloatingBar.css';

function FloatingBar() {
    
    const myStyle = {
        width: '100px', // note the capital 'W' here
        position: 'fixed',
        right:"2px", // 'ms' is the only lowercase vendor prefix
        top:"100px",
        float:"right",
        background: "#eea",
        zIndex: 100 
    };
    return (
        <div id="floating-bar" style={myStyle}>ee</div>
    )
}

export default FloatingBar;