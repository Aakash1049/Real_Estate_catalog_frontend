import React from "react";
import { json, useNavigate } from "react-router-dom";
import "../Dashboard/SideBar.css"

export default function SideBar() {
    const user = JSON.parse(localStorage.getItem("user"))
    console.log(user.email)
    const username = user.email.split("@")[0]
    console.log(username)
    const navigate=useNavigate()

    const logOutHandler=()=>{
        console.log("logout called")
        localStorage.clear()
        navigate("/")
    }

    return (
        <>
            <div className="dashboard">


                <div className="side-bar">
                    <h1>Logo </h1>
                    <section className="opt">
                        <ul>
                            <li id="l-1"><img className="img-1" src={require("../../Images/property.png")} /> Property</li>
                            <li><img className="img-1" src={require("../../Images/bell.png")} /> Assistance</li>
                            <li><img className="img-1" src={require("../../Images/recieved.webp")} /> Recieved Interest</li>
                            <li><img className="img-1" src={require("../../Images/sent.jpg")} /> Sent Interest</li>
                            <li><img className="img-1" src={require("../../Images/views.png")} /> Property Views</li>
                            <li><img className="img-1" src={require("../../Images/tarrif.png")} /> Tariff Plan</li>
                        </ul>
                    </section>
                </div>


                <div className="middle">
                    <nav className="head">
                        <h4>USER ID : 12PPD123</h4>
                        <section>
                            <img id="img-2" src={require("../../Images/person.png")} alt="logo" />
                            {/* <h4 className="username">{username}</h4> */}
                            <select className="username" onChange={()=>logOutHandler()}>
                                <option className="username" selected disabled hidden>{username}</option>
                                <option>Logout</option>
                            </select>
                        </section>
                    </nav>

                </div>
            </div>
        </>
    )
}