import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Component/Dashboard/SideBar";
import "../Forms/Basicinfo.css";
import PropertyNavigation from "../Component/PropertyNavigation/PropertyNavigation";
import { useNavigate } from "react-router-dom";

// Header

const Basic = ({ user, data, setData }) => {
    const [propertyType, setPropertyType] = useState("Home");
    const [negotialble, setNegotialble] = useState("Yes");
    const [price, setPrice] = useState("");
    const [ownership, setOwnership] = useState("Individual");
    const [propertyAge, setPropertyAge] = useState("Below25");
    const [propertyApprove, setPropertyApprove] = useState("Yes");
    const [description, setDescription] = useState("");
    const [bankLoan, setBankLoan] = useState("Yes");
    const navigate =useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Handle Submit Called");
        try {
            
            const PPID = parseInt(Math.random() * 10000);
            const Views = parseInt(Math.random() * 10);
            const Days = parseInt(Math.random() * 100);
            let ppi = PPID.toString();
            ppi = "PPID" + ppi;
            setData(
                {
                    ...data,
                    propertyType,
                    propertyAge,
                    propertyApprove,
                    bankLoan,
                    ownership,
                    price,
                    negotialble,

                    PPID: ppi,
                    Views: Views,
                    Days: Days
                }
            )
            console.log(data,user);
            navigate('/Propertydetail')

        }
        catch (error) {
            alert(error.message, error)
        }



    }

    return (
        <div>
            <Sidebar />
            <PropertyNavigation />

            <form action="" className="form-basicinfo" >


                <div className="form">
                    <div className="form-container1">
                        <h3>Property Type</h3>
                        <select className="input" id="Property" required placeholder="Select Property Type" value={propertyType} onChange={(e) => setPropertyType(e.target.value)}>
                            {/* <option defaultValue={} disabled hidden>Select Property Type</option> */}
                            <option value="Home">Home </option>
                            <option value="Plot">Plot </option>
                            <option value="Flat">Flat </option>
                        </select>

                        <h3>Price</h3>
                        <input type="text" id="Price" placeholder="E.g.100000" className="input" value={price} onChange={(e) => setPrice(e.target.value)}>
                        </input>


                        <h3>Property Age</h3>
                        <select className="input" id="Type" placeholder="Select Property Age" value={propertyAge} onChange={(e) => setPropertyAge(e.target.value)}>
                            {/* <option selected disabled hidden> Select Property Age</option> */}
                            <option value="Below25">Below 25</option>
                            <option value="Above25">Above 25</option>

                        </select>

                        <h3>Property Description</h3>
                        <input type="text" id="desc" placeholder="Enter the Description" className="input" value={description} onChange={(e) => setDescription(e.target.value)}>

                        </input>
                    </div>


                    <div className="form-container2">
                        <h3>Negotiable</h3>
                        <select type="text" id="nego" placeholder="Select Negotiable" className="input" value={negotialble} onChange={(e) => setNegotialble(e.target.value)}>
                            {/* <option selected disabled hidden>Select Negotiable</option> */}
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>

                        </select>

                        <h3>Ownership</h3>
                        <select type="text" id="own" placeholder="Select Ownership" className="input" value={ownership} onChange={(e) => setOwnership(e.target.value)}>
                            {/* <option selected disabled hidden> Select Ownership </option> */}
                            <option value={"Individual"}>Individual</option>
                            <option value={"Joint"}>Joint</option>

                        </select>

                        <h3>Property Approved</h3>
                        <select type="text" id="approve" placeholder="Property Approved" className="input" value={propertyApprove} onChange={(e) => setPropertyApprove(e.target.value)} >
                            {/* <option selected disabled hidden> Property Approved</option> */}
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>

                        </select>

                        <h3>Bank Loan</h3>
                        <select type="text" id="loan" placeholder="Bank Loan" className="input" value={bankLoan} onChange={(e) => setBankLoan(e.target.value)}>
                            {/* <option selected disabled hidden>Bank Loan</option> */}
                            <option value={"Yes"}>Yes</option>
                            <option value={"No"}>No</option>

                        </select>


                    </div>


                </div>
                <div className="buttons">
                    <button> Cancel</button>
                    <Link to="/Propertydetail">
                        <button onClick={(e)=>handleSubmit(e)}> Save & Continue</button>
                    </Link>
                </div>


            </form>

        </div>

    );


}


export default Basic;
