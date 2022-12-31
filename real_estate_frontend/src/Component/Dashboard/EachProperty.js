import React, { useState } from 'react'

const EachProperty = ({ property }) => {

    const [view, setView] = useState(false)
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

            </tr>
            {view ?
                <div className="view">
                    <span >Name: {property.name}</span>&nbsp;
                    <span>email: {property.email}</span>&nbsp;
                    <span >city: {property.city}</span>&nbsp;
                </div>

                : ""
            }

        </>

    )
}

export default EachProperty