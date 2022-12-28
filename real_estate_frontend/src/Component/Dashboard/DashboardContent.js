import React from "react";
import "../Dashboard/DashBoardContent.css"
import SideBar from "./SideBar";

export default function Content() {
    return (
        <>
            <SideBar />
            <div className="content">
                <input id="search" type="text" placeholder="Search PPD ID" name="search" />
                <button id="btn">+ Add Property</button>

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
        </>
    )
}