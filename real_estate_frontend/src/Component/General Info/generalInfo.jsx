import React from 'react'
import { useState } from 'react'
import SideBar from '../Dashboard/SideBar'
import "./generalInfo.css"
const GeneralInfo = () => {
    const [name, setName] = useState("")
    const [mobile, setmobile] = useState()
    const [postedBy, setPostedBy] = useState("")
    const [saleType, setSaleType] = useState("")
    const [featuredPackage, setFeaturedPackage] = useState("")
    const [ppdPackage, setPPDpackage] = useState("")
    const [image, setImage]=useState()
    return (
        <>
            <SideBar/>
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
                            <option value="sold">Sold</option>
                            <option value="unsold">unsold</option>
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
                    <input type="file" value={image} onChange={(e) => setImage(e.target.value)} id='photo' />
                    <label id="photo-label" htmlFor="photo"><i class="fa-solid fa-camera"></i></label>
                    &nbsp;  &nbsp; Add photo
                </div>
                <div className="buttons">

                    <button>Previous</button>
                    <button>Save & Continue</button>
                </div>
            </form>
        </>
    )
}

export default GeneralInfo