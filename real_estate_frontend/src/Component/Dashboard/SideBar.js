import React from "react";
import "../Dashboard/SideBar.css"

export default function SideBar(){
    return(
        <>
        <div className="dashboard">
        <div className="side-bar">
            <h1>Logo</h1>
            <section className="opt">
       <ul>
        <li><img id="pro" src={require("../../Images/property.png")} />Property</li>
        <li>Assistance</li>
        <li>Recieved Interest</li>
        <li>Sent Interest</li>
        <li>Property Views</li>
        <li>Tariff Plan</li>
       </ul>
            </section>
        </div>
        <div className="middle">
            <nav className="head">
             <h4>USER ID :</h4>   
             <img id="per" src={require("../../Images/person.png")} alt="logo"/>
            </nav>
        </div>
        </div>
        </>
    )
}