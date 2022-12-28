import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Dashboard/SideBar";
import "../Forms/Propertydetail.css"

// Header

const PropertyDetails = () => {
    try {

    }
    catch (error) {
        alert(error)
    }

    return (
        <div>
            <Sidebar/>

            <form action="" className="form-basic">


                <div className="form">
                    <div className="form-container1">
                        <h3>Length</h3>
                        <input type="text" id="length" Placeholder="Example:1000" className="input">

                        </input>

                        <h3>Total Area</h3>
                        <input type="text" id="length" Placeholder="Example:7500" className="input">
                        </input>


                        <h3>No of BHK</h3>
                        <select className="input" id="bhk" placeholder="Select No of BHK" >
                            <option> Select No of BHK</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>

                        </select>

                        <h3>Attached</h3>
                        <select className="input" id="attached" placeholder="Select Attached" >
                            <option> Select Attached</option>
                            <option >Yes</option>
                            <option >No</option>
                        </select>

                        <h3>Furnished</h3>
                        <select className="input" id="furnished" placeholder="Select Furnished" >
                            <option> Select Furnished</option>
                            <option >Fully Furnished</option>
                            <option >Semi Furnished</option>
                            <option >None</option>
                        </select>

                        <h3>Lift</h3>
                        <select className="input" id="lift" placeholder="Select Lift" >
                            <option> Select Lift</option>
                            <option >Yes</option>
                            <option >No</option>
                        </select>

                        <h3>Facing</h3>
                        <select className="input" id="facing" placeholder="Select Facing" >
                            <option> Select Facing</option>
                            <option >East</option>
                            <option >West</option>
                            <option >South</option>
                            <option >North</option>
                        </select>


                    </div>


                    <div className="form-container2">
                        <h3>Breadth</h3>
                        <input type="text" id="breadth" Placeholder="Example:1000" className="input">

                        </input>

                        <h3>Area Unit</h3>
                        <select className="input" id="unit" placeholder="Area Unit">
                            <option> Area Unit</option>
                            <option >Sqaure Meter</option>
                            <option >Square Foot</option>
                        </select>


                        <h3>No of Floors</h3>
                        <select className="input" id="floor" placeholder="Select No of Floor" >
                            <option> Select No of Floor</option>
                            <option >Ground</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>

                        </select>

                        <h3>Western Toilet</h3>
                        <select className="input" id="toilet" placeholder="Select Western Toilet" >
                            <option> Select Western Toilet</option>
                            <option >Yes</option>
                            <option >No</option>
                        </select>

                        <h3>Furnished</h3>
                        <select className="input" id="furnished" placeholder="Select Furnished" >
                            <option> Select Furnished</option>
                            <option >Fully Furnished</option>
                            <option >Semi Furnished</option>
                            <option >None</option>
                        </select>

                        <h3>Car Parking</h3>
                        <select className="input" id="parking" placeholder="Select Car Parking" >
                            <option> Select Car Parking</option>
                            <option >Yes</option>
                            <option >No</option>
                        </select>

                        <h3>Electricity</h3>
                        <select className="input" id="electricity" placeholder="Example: 3 Phase" >
                            <option> Example: 3 Phase</option>
                            <option >1 Phase</option>
                            <option >2 Phase</option>
                            <option >3 Phase</option>
                            
                        </select>


                    </div>


                </div>

                <div className="buttons">
                <button> Previous</button>
                <button> Save & Continue</button>
                </div>
                


            </form>
            

        </div>

    );


}


export default PropertyDetails;
