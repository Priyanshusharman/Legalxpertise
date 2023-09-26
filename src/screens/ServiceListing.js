import React, { useEffect } from 'react'
import Card from '../component/Card'
import '../css/Service-Listing.css'

const ServiceListing = () => {

//   const loadData = async () => {
//     const response = await fetch("http://localhost:7000/api/lawyerauth/getLawyer", {
//         method: "POST",
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });
//     let data = await response.json();
//     console.log(data);
// }
// useEffect(() => {
//     loadData();
// }, []);

  return (
    <>  
        <div className='main'>
        <h1>Criminal Lawyer</h1>
        {}<Card />
        </div>
    </>
  )
}

export default ServiceListing