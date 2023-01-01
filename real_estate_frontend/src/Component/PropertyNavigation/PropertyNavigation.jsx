import React from 'react'
import "./propertyNavigation.css"

const PropertyNavigation = () => {
  return (
    <>
    
    <div className='Propertynavigation'>
    <h3 className='add-back'>
    Add New Property
    </h3>
        <ul>
            <li><span>1</span> Basic Info</li>
            <li><span>2</span> Property Detail</li>
            <li><span>3</span> General Info</li>
            <li><span>4</span> Location Info</li>
        </ul>
    </div>
    </>
  )
}

export default PropertyNavigation