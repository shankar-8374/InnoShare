import React from "react";
import './navbar.css';
const Navbar=()=>{
    let Company="InnoShare";
    return(
        <div className="App">
            <div>
            <h1 className="companyName">{Company}</h1>
            </div>
            <div><p>Bridging Tomorrow's Innovators with Today's Industry</p></div>
        </div>
    )
}

export default Navbar;