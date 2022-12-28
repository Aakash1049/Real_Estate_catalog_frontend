import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Dashboard/SideBar";
import "../Forms/Basicinfo.css";
import PropertyNavigation from "../Component/PropertyNavigation/PropertyNavigation";

// Header

const Basic = () => {
    const [propertyType, setPropertyType] = useState("");
    const [negotialble, setNegotialble] = useState("");
    const [price, setPrice] = useState("");
    const [ownership, setOwnership] = useState("");
    const [propertyAge, setPropertyAge] = useState("");
    const [propertyApprove, setPropertyApprove] = useState("");
    const [description, setDescription]=useState("");
    const [bankLoan, setBankLoan]=useState("");

    return (
        <div>
            <Sidebar/>
            <PropertyNavigation/>
    
            <form action="" className="form-basicinfo">
    
    
                <div className="form">
                    <div className="form-container1">
                        <h3>Property Type</h3>
                        <select className="input" id="Property" required placeholder="Select Property Type"  value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                            <option>Select Property Type</option>
                            <option>Home </option>
                            <option>Plot </option>
                            <option>Flat </option>
                        </select>
    
                        <h3>Price</h3>
                        <input type="text" id="Price"  placeholder="E.g.100000" className="input" value={price} onChange={(e) => setPrice(e.target.value)}>
                        </input>
    
    
                        <h3>Property Age</h3>
                        <select className="input" id="Type" placeholder="Select Property Age"  value={propertyAge} onChange={(e) => setPropertyAge(e.target.value)}>
                            <option> Select Property Age</option>
                            <option >Below 25</option>
                            <option >Above 25</option>
    
                        </select>
    
                        <h3>Property Description</h3>
                        <input type="text" id="desc"  Placeholder="Enter the Description" className="input" value={description} onChange={(e) => setDescription(e.target.value)}>
    
                        </input>
                    </div>
    
    
                    <div className="form-container2">
                        <h3>Negotiable</h3>
                        <select type="text" id="nego" placeholder="Select Negotiable" className="input" value={negotialble} onChange={(e) => setNegotialble(e.target.value)}>
                            <option>Select Negotiable</option>
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>
    
                        </select>
    
                        <h3>Ownership</h3>
                        <select type="text" id="own" placeholder="Select Ownership" className="input" value={ownership} onChange={(e) => setOwnership(e.target.value)}>
                            <option> Select Ownership </option>
                            <option value={"Individual"}>Individual</option>
                            <option value={"Joint"}>Joint</option>
    
                        </select>
    
                        <h3>Property Approved</h3>
                        <select type="text" id="approve" placeholder="Property Approved" className="input" value={propertyApprove} onChange={(e) => setPropertyApprove(e.target.value)} >
                            <option> Property Approved</option>
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>
    
                        </select>
    
                        <h3>Bank Loan</h3>
                        <select type="text" id="loan" placeholder="Bank Loan" className="input" value={bankLoan} onChange={(e) => setBankLoan(e.target.value)}>
                            <option>Bank Loan</option>
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>
    
                        </select>
    
    
                    </div>


                </div>
                <div className="buttons">
                <button> Cancel</button>
                <button> Save & Continue</button>
                </div>
                
              
            </form>
    
        </div>
    
    );


}


export default Basic;
