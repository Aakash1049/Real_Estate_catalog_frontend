import React from 'react'
import { useState } from 'react'
import SideBar from '../Dashboard/SideBar'
import PropertyNavigation from '../PropertyNavigation/PropertyNavigation'
import "./generalInfo.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

const GeneralInfo = ({ user, data, setData }) => {
    const [name, setName] = useState("")
    const [mobile, setmobile] = useState()
    const [postedBy, setPostedBy] = useState("Owner")
    const [saleType, setSaleType] = useState("Unsold")
    const [featuredPackage, setFeaturedPackage] = useState("")
    const [ppdPackage, setPPDpackage] = useState("")
    const [image, setImage]=useState();
    const [url,setUrl]=useState()
    const navigate =useNavigate();


    useEffect(()=>{
        if(url){

            try {
                setData(
                {
                    ...data,
                    name,
                    mobile,
                    postedBy,
                    saleType,
                    featuredPackage,
                    ppdPackage,
                    photo:url
                   
                }
            )
            console.log(data, user);
            navigate('/locationInfo')
            
        }
        catch (error) {
            alert(error.message, error)
        }
    }
    },[url])
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log("Handle Submit Called");
        

        const data = new FormData()
        data.append("file",image)
        data.append("upload_preset","Real_Estate")
        data.append("cloud_name","dlji1mozy")
        fetch("https://api.cloudinary.com/v1_1/dlji1mozy/image/upload",{
          method:"POST",
          body:data,
        }).then(res=>res.json())
        .then( data=>setUrl(data.secure_url))
        .catch(err=>console.log(err))

    }




    return (
        <>
            <SideBar/>
            <PropertyNavigation/>
            <form className='generalInfo'>
                <div className='a'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} /> <br />
                    </div>
                    <div>
                        <label htmlFor="mobile">Mobile</label>
                        <br />
                        <input type="number" id="mobile" value={mobile} placeholder='Enter Mobile Number' onChange={(e) => setmobile(e.target.value)} /> <br />
                    </div>
                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="postedBy">Posted By</label>
                        <br />
                        <select id="postedBy" value={postedBy} onChange={(e) => setPostedBy(e.target.value)}>
                            <option>Select</option>
                            <option value="Owner">Owner</option>
                            <option value="Agent">Agent</option>
                        </select> <br />
                    </div>
                    <div>
                        <label htmlFor="saleType" >Sale Type</label>
                        <br />
                        <select id="postedBy" value={saleType} onChange={(e) => setSaleType(e.target.value)}>
                            <option>Select</option>
                            <option value="Sold">Sold</option>
                            <option value="Unsold">unsold</option>
                        </select> <br />
                    </div>

                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="featuredPackage" >Featured Package</label>
                        <br />
                        <input type="text" id="featuredPackage" value={featuredPackage} onChange={(e) => setFeaturedPackage(e.target.value)} /> <br />
                    </div>
                    <div>
                        <label htmlFor="PPDPackage">PPD Package</label>
                        <br />
                        <input type="text" id="PPDPackage" value={ppdPackage} onChange={(e) => setPPDpackage(e.target.value)} />
                    </div>
                </div>
                <div className='photo'>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} id='photo' />
                    <label id="photo-label" htmlFor="photo"><i class="fa-solid fa-camera"></i></label>
                    &nbsp;  &nbsp; Add photo
                </div>
                <div className="buttons">

                    <button>Previous</button>
                    <button onClick={(e)=>handleSubmit(e)}>Save & Continue</button>
                </div>
            </form>
        </>
    )
}

export default GeneralInfo