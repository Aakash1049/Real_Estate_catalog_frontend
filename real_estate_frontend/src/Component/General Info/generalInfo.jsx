import React from 'react'
import "./generalInfo.css"
const GeneralInfo = () => {
    return (
        <>
            <form className='generalInfo'>
                <div className='a'>
                    <div>
                        <label htmlFor="name">Name</label>
                        <br />
                        <input type="text" id="name" /> <br />
                    </div>
                    <div>
                    <label htmlFor="mobile">Mobile</label>
                    <br />
                    <input type="number" id="mobile" placeholder='Enter Mobile Number'/> <br />
                    </div>
                </div>
                <div className='a'>
                    <div>
                    <label htmlFor="postedBy">Posted By</label>
                    <br />
                    <select id="postedBy">
                        <option value="Owner">Owner</option>
                        <option value="Agent">Agent</option>
                    </select> <br />
                    </div>
                    <div>
                    <label htmlFor="saleType">Sale Type</label>
                    <br />
                    <select id="postedBy">
                        <option value="sold">Sold</option>
                        <option value="unsold">unsold</option>
                    </select> <br />
                    </div>

                </div>
                <div className='a'>
                    <div>
                    <label htmlFor="featuredPackage">Featured Package</label>
                    <br />
                    <input type="text" id="featuredPackage" /> <br />
                    </div>
                    <div>
                    <label htmlFor="PPDPackage">PPD Package</label>
                    <br />
                    <input type="text" id="PPDPackage" />
                    </div>
                </div>
                <div className='photo'>
                <input type="file" id='photo'/>
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