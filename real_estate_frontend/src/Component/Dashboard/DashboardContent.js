import React, { useEffect, useState } from "react";
import "../Dashboard/DashBoardContent.css"
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";

export default function Content() {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([])
    const [serachResults, setSearchResults]=useState([])
    const [searchText, setSearchtext]=useState("")
    const [view,setView]=useState(false)
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

   
}



    const searchHandler =(e)=>{
        setSearchtext(e.target.value)
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
                <input id="search" type="text" value={searchText} onChange={(e)=>searchHandler(e)} placeholder="Search PPD ID" name="search" />
                <button id="btn" onClick={() => navigate("/Basicinfo")}>+ Add Property</button>


               
                <table >


                    <div className="">
                        <ul className="">
                        <tr className="table">
                                <td className="table-ppd">PPD ID</td>
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
                                searchText.length<1?
                               
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
                                                <td><i class="fa-solid fa-eye" onClick={()=>setView(!view)}></i> <i class="fa-solid fa-pen"></i></td>
                                                {view?
                                                <>                                                
                                                 <p>Name: {property.name}</p>
                                                 <p>email: {property.email}</p>
                                                 <p>address: {property.address}</p>
                                                 </>

                                                :"" }
                                            </tr>

        
                                        </>
                                    )
                                })
                                :
                                serachResults.map((property) => {
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
                                                <td><i class="fa-solid fa-eye" onClick={()=>setView(!view)}></i> <i class="fa-solid fa-pen"></i></td>
                                                {view?
                                                <>                                                
                                                 <p>Name: {property.name}</p>
                                                 <p>email: {property.email}</p>
                                                 <p>address: {property.address}</p>
                                                 </>

                                                :"" }
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