import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Dashboard/SideBar";
import PropertyNavigation from "../Component/PropertyNavigation/PropertyNavigation";
import "../Forms/Propertydetail.css";
import { useNavigate } from "react-router-dom";

// Header

const PropertyDetails = ({ user, data, setData }) => {
    const [length, setLength] = useState("");
    const [breadth, setBreadth] = useState("");
    const [totalArea, setTotalArea] = useState("");
    const [areaUnit, setAreaUnit] = useState("");
    const [bhk, setbhk] = useState("1");
    const [floors, setFloors] = useState("Ground");
    const [attached, setAttached]=useState("Yes");
    const [western, setWestern]=useState("Yes");
    const [furnished, setFurnished] = useState("Fully Furnished");
    const [lifts, setLifts]=useState("Yes");
    const [parking, setParking]=useState("Yes");
    const [facing, setFacing]=useState("East");
    const [electricity, setElectricity]=useState("1 Phase");
    const navigate =useNavigate();

    // console.log(user, "From Basic Page");
    // console.log(data);

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                    length,
                    breadth,
                    totalArea,
                    areaUnit,
                    bhk,
                    floors,
                    attached,
                    western,
                    furnished,
                    lifts,
                    parking,
                    facing,
                    electricity
                }
            )
            console.log(data, user);
            navigate('/generalInfo')

        }
        catch (error) {
            alert(error.message, error)
        }



    }




    return (
        <div>
            <Sidebar/>
            <PropertyNavigation/>
            <form action="" className="form-basic">


                <div className="form">
                    <div className="form-container1">
                        <h3>Length</h3>
                        <input type="text" id="length" Placeholder="Example:1000" className="input" value={length} onChange={(e) => setLength(e.target.value)}>

                        </input>

                        <h3>Total Area</h3>
                        <input type="text" id="length" Placeholder="Example:7500" className="input" value={totalArea} onChange={(e) => setTotalArea(e.target.value)}>
                        </input>


                        <h3>No of BHK</h3>
                        <select className="input" id="bhk" placeholder="Select No of BHK" value={bhk} onChange={(e) => setbhk(e.target.value)}>
                            {/* <option> Select No of BHK</option> */}
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>

                        </select>

                        <h3>Attached</h3>
                        <select className="input" id="attached" placeholder="Select Attached" value={attached} onChange={(e) => setAttached(e.target.value)} >
                            <option> Select Attached</option>
                            <option >Yes</option>
                            <option >No</option>
                        </select>

                        <h3>Furnished</h3>
                        <select className="input" id="furnished" placeholder="Select Furnished" value={furnished} onChange={(e) => setFurnished(e.target.value)}>
                            <option> Select Furnished</option>
                            <option >Fully Furnished</option>
                            <option >Semi Furnished</option>
                            <option >None</option>
                        </select>

                        <h3>Lift</h3>
                        <select className="input" id="lift" placeholder="Select Lift"  value={lifts} onChange={(e) => setLifts(e.target.value)}>
                            <option> Select Lift</option>
                            <option >Yes</option>
                            <option >No</option>
                        </select>

                        <h3>Facing</h3>
                        <select className="input" id="facing" placeholder="Select Facing" value={facing} onChange={(e) => setFacing(e.target.value)}>
                            <option> Select Facing</option>
                            <option >East</option>
                            <option >West</option>
                            <option >South</option>
                            <option >North</option>
                        </select>


                    </div>


                    <div className="form-container2">
                        <h3>Breadth</h3>
                        <input type="text" id="breadth" Placeholder="Example:1000" className="input" value={breadth} onChange={(e) => setBreadth(e.target.value)}>

                        </input>

                        <h3>Area Unit</h3>
                        <select className="input" id="unit" placeholder="Area Unit" value={areaUnit} onChange={(e) => setAreaUnit(e.target.value)}>
                            <option> Area Unit</option>
                            <option >Sqaure Meter</option>
                            <option >Square Foot</option>
                        </select>


                        <h3>No of Floors</h3>
                        <select className="input" id="floor" placeholder="Select No of Floor" value={floors} onChange={(e) => setFloors(e.target.value)}>
                            <option> Select No of Floor</option>
                            <option >Ground</option>
                            <option >1</option>
                            <option >2</option>
                            <option >3</option>
                            <option >4</option>
                            <option >5</option>

                        </select>

                        <h3>Western Toilet</h3>
                        <select className="input" id="toilet" placeholder="Select Western Toilet" value={western} onChange={(e) => setWestern(e.target.value)}>
                            <option> Select Western Toilet</option>
                            <option >Yes</option>
                            <option >No</option>
                        </select>

                        <h3>Car Parking</h3>
                        <select className="input" id="parking" placeholder="Select Car Parking" value={parking} onChange={(e) => setParking(e.target.value)}>
                            <option> Select Car Parking</option>
                            <option >Yes</option>
                            <option >No</option>
                        </select>

                        <h3>Electricity</h3>
                        <select className="input" id="electricity" placeholder="Example: 3 Phase" value={electricity} onChange={(e) => setElectricity(e.target.value)}>
                            <option> Example: 3 Phase</option>
                            <option >1 Phase</option>
                            <option >2 Phase</option>
                            <option >3 Phase</option>
                            
                        </select>


                    </div>


                </div>

                <div className="buttons">
                <button> Previous</button>
                <button onClick={(e)=>handleSubmit(e)}> Save & Continue</button>
                </div>
                


            </form>
            

        </div>

    );


}


export default PropertyDetails;
