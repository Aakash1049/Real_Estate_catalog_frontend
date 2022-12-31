import React, { useEffect, useState } from "react";
import "../Dashboard/DashBoardContent.css"
import SideBar from "./SideBar";
import { useNavigate } from "react-router-dom";
import EachProperty from "./EachProperty";

export default function Content() {
    const navigate = useNavigate();
    const [properties, setProperties] = useState([])
    const [serachResults, setSearchResults] = useState([])
    const [searchText, setSearchtext] = useState("")
<<<<<<< HEAD
    const [view, setView] = useState(false)
=======

>>>>>>> ea80cf0dc3b89bf816e51628e7d21c2cb6a98236
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

<<<<<<< HEAD
    const saletypeHandler = (e, PPDID) => {
        console.log(e.target.value)
        e.preventDefault()

        fetch(`/updateProperty/${PPDID}`, {
            method: "PUT",
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json()).then(data => {
            alert(data.message)
        })


    }
=======
>>>>>>> ea80cf0dc3b89bf816e51628e7d21c2cb6a98236



    const searchHandler = (e) => {
        setSearchtext(e.target.value)
        const search = e.target.value
        fetch(`/search/${search}`, {
            method: "GET",
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setSearchResults(data)
                console.log(serachResults, "is serch reslut")
            })
    }
    return (
        <>
            <SideBar />
            <div className="content">
                <input id="search" type="text" value={searchText} onChange={(e) => searchHandler(e)} placeholder="Search PPD ID" name="search" />
                <button id="btn" onClick={() => navigate("/Basicinfo")}>+ Add Property</button>



                <table >




                    <tr className="table">
<<<<<<< HEAD
                        <td >PPD ID</td>
=======
                        <td className="table-ppd">PPD ID</td>
>>>>>>> ea80cf0dc3b89bf816e51628e7d21c2cb6a98236
                        <td>Image</td>
                        <td>Property</td>
                        <td>Contact</td>
                        <td>Area</td>
                        <td>Views</td>
<<<<<<< HEAD
                        <td >Status</td>
=======
                        <td>Status</td>
>>>>>>> ea80cf0dc3b89bf816e51628e7d21c2cb6a98236
                        <td>Days Left</td>
                        <td>Action</td>
                    </tr>

                    {
                        searchText.length < 1 ?

                            properties.map((property) => {
                                console.log(property)
                                return (
<<<<<<< HEAD
                                    <>


                                        <tr className="table-data">
                                            <td>{property.PPDID}</td>
                                            <td><i class="fa-regular fa-images"></i></td>
                                            <td>{property.propertyType}</td>
                                            <td>{property.mobile}</td>
                                            <td>{property.totalArea}</td>
                                            <td>{property.Views}</td>
                                            <td><button id="btt-1" onClick={(e) => saletypeHandler(e, property.PPDID)} value={property.saleType}>{property.saleType}</button></td>
                                            <td>{property.Days}</td>
                                            <td><i class="fa-solid fa-eye" onClick={() => setView(!view)}></i> <i class="fa-solid fa-pen"></i></td>
                                            {view ?
                                                <div className="view">
                                                    <p>Name: {property.name}</p>
                                                    <p>email: {property.email}</p>
                                                    <p>address: {property.address}</p>
                                                </div>

                                                : ""}
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
                                            <td><button id="btt-1" onClick={(e) => saletypeHandler(e, property.PPDID)} value={property.saleType}>{property.saleType}</button></td>
                                            <td>{property.Days}</td>
                                            <td><i class="fa-solid fa-eye" onClick={() => setView(!view)}></i> <i class="fa-solid fa-pen"></i></td>
                                            {view ?
                                                <div className="view">
                                                    <p>Name: {property.name}</p>
                                                    <p>email: {property.email}</p>
                                                    <p>address: {property.address}</p>
                                                </div>

                                                : ""}
                                        </tr>


                                    </>
                                )
                            })
                    }


=======
                                    <EachProperty property={property} />
                                )
                            })
                            :
                            serachResults.map((property) => {
                                console.log(property)
                                return (
                                    <EachProperty property={property} />
                                )
                            })
                    }


>>>>>>> ea80cf0dc3b89bf816e51628e7d21c2cb6a98236
                </table>
            </div>
        </>
    )
}