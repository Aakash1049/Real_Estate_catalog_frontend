import React from 'react'
import "./locationInfo.css"
import SideBar from '../Dashboard/SideBar'
import PropertyNavigation from '../PropertyNavigation/PropertyNavigation'
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const LocationInfo = ({ user, data, setData }) => {
    const [email,setEmail]=useState("")
    const [city,setCity]=useState("")
    const [area,setArea]=useState("")
    const [pincode, setPincode]=useState();
    const [address,setAdress]=useState("");
    const [landmark,setLandmark]=useState("");
    const [lattitude, setLattitude]=useState();
    const [longitude, setLongitude]=useState();
    const navigate =useNavigate();

    useEffect(()=>{
        if(!data.email) return

        fetch("/addProperty", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body: JSON.stringify({
                data
            })
        }).then(res => res.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                }
                else {
                   
                    alert(data.message)
                    navigate("/Content")
                }
            })

    },[data])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!email || !city || !area || !pincode || !address || !lattitude || !longitude){
            alert("all fields are mandatory")
            return
        }
        // console.log("Handle Submit Called");
        try {
            
            // const PPID = parseInt(Math.random() * 10000);
            // const Views = parseInt(Math.random() * 10);
            // const Days = parseInt(Math.random() * 100);
            // let ppi = PPID.toString();
            // ppi = "PPID" + ppi;
            setData(
                {
                    ...data,
                    email,
                    city,
                    area,
                    pincode,
                    address,
                    landmark,
                    lattitude,
                    longitude
                   
                }
            )
            console.log(data, user);
            // navigate('/locationInfo')

        }
        catch (error) {
            alert(error.message, error)
        }



    }







    return (
        <>
                <SideBar />
                <PropertyNavigation/>
            <form className='locationInfo'>
                <div className='a'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} id="email" /> <br />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <br />
                        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}  id="city" placeholder='Enter your city' /> <br />
                    </div>
                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="area">Area</label>
                        <br />
                        <input type="text" value={area} onChange={(e)=>setArea(e.target.value)}  id="area" /> <br />
                    </div>
                    <div>
                        <label htmlFor="pincode">Pincode</label>
                        <br />
                        <input type="number" value={pincode} onChange={(e)=>setPincode(e.target.value)}  id="city" placeholder='Enter your Pincode' /> <br />
                    </div>

                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="address">Address</label>
                        <br />
                        <input type="text" value={address} onChange={(e)=>setAdress(e.target.value)}  id="address" /> <br />
                    </div>
                    <div>
                        <label htmlFor="landmark">Landmark</label>
                        <br />
                        <input type="text" value={landmark} onChange={(e)=>setLandmark(e.target.value)}  id="landmark" />
                    </div>
                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="lattitude">lattitude</label>
                        <br />
                        <input type="number" value={lattitude} onChange={(e)=>setLattitude(e.target.value)}  id="lattitude" /> <br />
                    </div>
                    <div>
                        <label htmlFor="longitude">longitude</label>
                        <br />
                        <input type="number" value={longitude} onChange={(e)=>setLongitude(e.target.value)}  id="longitude" />
                    </div>
                </div>
                <div className="buttons">
                
                <button>Previous</button>
                <button onClick={(e)=>handleSubmit(e)}>Add Property</button>
                </div>
            
            </form>
        </>
    )
}

export default LocationInfo