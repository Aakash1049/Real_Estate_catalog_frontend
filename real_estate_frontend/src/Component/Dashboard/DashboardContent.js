import React, { useEffect, useState } from "react";
import "../Dashboard/DashBoardContent.css"
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

export default function Content() {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([])
    const [serachResults, setSearchResults]=useState([])
    useEffect(() => {
        fetch("/getAllProperties", {
            method: "GET",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        })
            .then(res => res.json())
            .then(data => {
                setProperties(data)

            })
    }, [properties])

const  saletypeHandler =(e,PPDID)=>{
    console.log(e.target.value)
e.preventDefault()

    fetch(`/updateProperty/${PPDID}`, {
        method: "PUT",
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("jwt")
        }
    }).then(res=>res.json()).then(data=>{
        alert(data.message)
    })

   // let Array = e.target.value
    // let Update = {
    //     saleType :"Unsold",
    //     Days:0
    // }
    // if(e.target.value=="Unsold")
    // {
    //     Update.saleType = "Sold"
    //   Update.Days = parseInt(Math.random() * 10)
    // }

    // console.log(Update.saleType)
}



    const searchHandler =(e)=>{
        const search=e.target.value
        fetch(`/search/${search}`,{
            method:"GET",
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
            <SideBar />
            <div className="content">
                <input id="search" type="text" onChange={(e)=>searchHandler(e)} placeholder="Search PPD ID" name="search" />
                <button id="btn" onClick={() => navigate("/Basicinfo")}>+ Add Property</button>


                {/* <ul className="ul">
                    <li className="list-item">PPD ID</li>
                    <li className="list-item">Image</li>
                    <li className="list-item">Property</li>
                    <li className="list-item">Contact</li>
                    <li className="list-item">Area</li>
                    <li className="list-item">Views</li>
                    <li className="list-item">Status</li>
                    <li className="list-item">DayLift</li>
                    <li className="list-item">Action</li>
                </ul> */}

                <table >


                    <div className="">
                        <ul className="">
                        <tr className="table">
                                <td >PPD ID</td>
                                <td>Image</td>
                                <td>Property</td>
                                <td>Contact</td>
                                <td>Area</td>
                                <td>Views</td>
                                <td>Status</td>
                                <td>Days Left</td>
                                <td>Action</td>
                            </tr>

                            {
                               
                                properties.map((property) => {
                                    console.log(property)
                                    return (
                                        <>
                                            

                                            <tr className="table-data">
                                                <td>{property.PPDID}</td>
                                                <td><i class="fa-regular fa-images"></i></td>
                                                <td>{property.propertyType}</td>
                                                <td>{property.mobile}</td>
                                                <td>{property.totalArea}</td>
                                                <td>{property.Views}</td>
                                                <td><button  id="btt-1" onClick={(e)=>saletypeHandler(e,property.PPDID)} value={property.saleType}>{property.saleType}</button></td>
                                                <td>{property.Days}</td>
                                                <td><i class="fa-solid fa-eye"></i> <i class="fa-solid fa-pen"></i></td>
                                            </tr>

        
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </table>
            </div>
        </>
    )
}