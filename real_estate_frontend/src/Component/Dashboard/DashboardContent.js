import React, { useEffect, useState } from "react";
import "../Dashboard/DashBoardContent.css"
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

export default function Content() {
    const navigate =useNavigate();
    const [properties,setProperties]=useState([])
    const [serachResults, setSearchResults]=useState([])
    useEffect(()=>{
        fetch("/getAllProperties",{
            method:"GET",
            headers:{
              "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        })
        .then(res=>res.json())
        .then(data=>{
            setProperties(data)
            
        })
    },[])

    const searchHandler =(e)=>{
        const search=e.target.value
        fetch(`/search/${search}`,{
            method:"GET"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setSearchResults(data)
            console.log(serachResults,"is serch reslut")
        })
    }

    return (
        <>
        <SideBar/>
         <div className="content">
              <input id="search" type="text" onChange={(e)=>searchHandler(e )} placeholder="Search PPD ID" name="search"/>           
              <button id="btn" onClick={()=>navigate("/Basicinfo")}>+ Add Property</button>
            

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
                <div className="all-properties">
                   
                    {
                        
                        properties.map((property)=>{
                            console.log(property)
                            return(
                                <>
                                    <ul className="ul" style={{position:"",margin:"160px -10px 20px 0"}}>
                                    <li className="list-item">{property.PPDID}</li>
                                    <li className="list-item">Image</li>
                                    <li className="list-item">{property.propertyType}</li>
                                    <li className="list-item">{property.mobile}</li>
                                    <li className="list-item">{property.area}</li>
                                    <li className="list-item">{property.Views}</li>
                                    <li className="list-item">{property.saleType}</li>
                                    <li className="list-item">{property.Days}</li>
                                    <li className="list-item">v/e</li>
                                    </ul>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}