import React from "react";
import "../Dashboard/SideBar.css"

export default function SideBar(){
    return(
        <>
        <div className="dashboard">


        <div className="side-bar">
            <h1>Logo </h1>
            <section className="opt">
       <ul>
        <li id="l-1"><img  className="img-1" src={require("../../Images/property.png")} /> Property</li>
        <li><img  className="img-1" src={require("../../Images/bell.png")} /> Assistance</li>
        <li><img  className="img-1" src={require("../../Images/recieved.webp")} /> Recieved Interest</li>
        <li><img  className="img-1" src={require("../../Images/sent.jpg")} /> Sent Interest</li>
        <li><img  className="img-1" src={require("../../Images/views.png")} /> Property Views</li>
        <li><img  className="img-1" src={require("../../Images/tarrif.png")} /> Tariff Plan</li>
       </ul>
            </section>
        </div>

        
        <div className="middle">
            <nav className="head">
             <h4>USER ID : 12PPD123</h4>   
             <img id="img-2" src={require("../../Images/person.png")} alt="logo"/>
            </nav>
            <div className="content">
              <input id="search" type="search" placeholder="Search PPD ID" name="search"    />           
              <button id="btn">+ Add Property</button>
              <div className="list">
                <ul className="ul">
                    <li className="list-item">PPD ID</li>
                    <li className="list-item">Image</li>
                    <li className="list-item">Property</li>
                    <li className="list-item">Contact</li>
                    <li className="list-item">Area</li>
                    <li className="list-item">Views</li>
                    <li className="list-item">Status</li>
                    <li className="list-item">DayLift</li>
                    <li className="list-item">Action</li>
                </ul>
              </div>
               </div>
        </div>
        </div>
        </>
    )
}