import React from 'react'
import "./locationInfo.css"
import SideBar from '../Dashboard/SideBar'
const LocationInfo = () => {
    



    return (
        <>
                <SideBar />

            <form className='locationInfo'>
                <div className='a'>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br />
                        <input type="email" id="email" /> <br />
                    </div>
                    <div>
                        <label htmlFor="city">City</label>
                        <br />
                        <input type="text" id="city" placeholder='Enter your city' /> <br />
                    </div>
                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="area">Area</label>
                        <br />
                        <input type="text" id="area" /> <br />
                    </div>
                    <div>
                        <label htmlFor="pincode">Pincode</label>
                        <br />
                        <input type="number" id="city" placeholder='Enter your Pincode' /> <br />
                    </div>

                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="address">Address</label>
                        <br />
                        <input type="text" id="address" /> <br />
                    </div>
                    <div>
                        <label htmlFor="landmark">Landmark</label>
                        <br />
                        <input type="text" id="landmark" />
                    </div>
                </div>
                <div className='a'>
                    <div>
                        <label htmlFor="lattitude">lattitude</label>
                        <br />
                        <input type="number" id="lattitude" /> <br />
                    </div>
                    <div>
                        <label htmlFor="longitude">longitude</label>
                        <br />
                        <input type="number" id="longitude" />
                    </div>
                </div>
                <div className="buttons">
                
                <button>Previous</button>
                <button>Add Property</button>
                </div>
            
            </form>
        </>
    )
}

export default LocationInfo