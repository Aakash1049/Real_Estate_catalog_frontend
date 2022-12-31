import React, { useEffect, useState } from "react";
import "../Dashboard/DashBoardContent.css"
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

export default function Content() {
    const navigate =useNavigate();
    const [properties,setProperties]=useState([])

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

const toggleAndSave =(e)=>{

console.log(e.target.value)

let buttonupdate = e.target.value.split(",")

let Update = {
    saleType :"Unsold",
    Days:0
}

    if(buttonupdate[0]==="Unsold"){
       Update.saleType = "Sold"
       Update.Days =parseInt(Math.random() * 10)
    }
    console.log( Update.saleType)
}



    return (
        <>
        <SideBar/>
         <div className="content">
              <input id="search" type="text" placeholder="Search PPD ID" name="search"    />           
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
                    <ul className="ul">
                    {
                        
                        properties.map((property)=>{
                            console.log(property)
                            return(
                                <>
                                    {/* <table>
                                        <tr>
                                            <td>{property.PPDID}</td>
                                            <td>Image</td>
                                            <td>{property.propertyType}</td>
                                            <td>{property.mobile}</td>
                                            <td>{property.area}</td>
                                            <td>{property.Views}</td>
                                            <td>{property.saleType}</td>
                                            <td>{property.Days}</td>
                                            <td>v/e</td>
                                        </tr>
                                    </table> */}
                                    <li className="list-item">{property.PPDID}</li>
                                    <li className="list-item">Image</li>
                                    <li className="list-item">{property.propertyType}</li>
                                    <li className="list-item">{property.mobile}</li>
                                    <li className="list-item">{property.area}</li>
                                    <li className="list-item">{property.Views}</li>
                                    <li className="list-item"><button onClick={toggleAndSave} value={[property._id,property.saleType]}>{property.saleType}</button></li>
                                    <li className="list-item">{property.Days}</li>
                                    <li className="list-item">v/e</li>
                                </>
                            )
                        })
                    }
                    </ul>
                </div>
            </div>
        </>
    )
}