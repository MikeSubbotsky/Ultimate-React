import React, { useState, useEffect } from 'react';

function MenuBar( {name} ) {
    const [username, setUsername] = useState(name);
    
    useEffect(() => {
        setUsername(name);
        console.log(name);
      }, [name]);
    
    return (
        <div className="form-control-lg m-2 border border-dark">
            <div style={{float: "left"}}>{new Date().toDateString()}</div>
            <div style={{float: "right"}}>{username}</div>
        </div>
    );
}

export default MenuBar;