import React, { useEffect } from 'react'
import Card from '../component/Card'
import '../css/Service-Listing.css'
import Navbar from '../component/Navbar'
import Navjustic from '../component/Navjustic'
import Footer from '../component/Footer'
import pfp from '../assets/images/profile-user.png'  

const ServiceListing = () => {

//   const loadData = async () => {
//     const response = await fetch("https://legalxpertise.onrender.com/api/search/criminallawyer", {
//         method: "get",
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
        <Navbar />
        <Navjustic />
        <div className='main'>
        <h1>Criminal Lawyer</h1>
        <div className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        </div>
        </div>
        <div class="main2">
            <h1>Leaderboard</h1>
            <div class="leaderboard">
                <div class="lead-head">
                    <h2>Rank</h2>
                    <h2>Player</h2>
                    <h2>Points</h2>
                </div>
                <div class="lead-data">
                    <h3>1</h3>
                    <h3><img src={pfp} alt=""/>Khushi Singh</h3>
                    <h3>4000</h3>
                </div>
                <div class="lead-data">
                    <h3>2</h3>
                    <h3><img src={pfp} alt=""/>Raghav Sharma</h3>
                    <h3>3500</h3>
                </div>
                <div class="lead-data">
                    <h3>3</h3>
                    <h3><img src={pfp} alt=""/>Manan Agarwal</h3>
                    <h3>3000</h3>
                </div>
                <div class="lead-data">
                    <h3>4</h3>
                    <h3><img src={pfp} alt=""/>Piyush Agarwal</h3>
                    <h3>2500</h3>
                </div>
                <div class="lead-data">
                    <h3>5</h3>
                    <h3><img src={pfp} alt=""/>Priyanshu Sharman</h3>
                    <h3>2000</h3>
                </div>
                <div class="lead-data">
                    <h3>6</h3>
                    <h3><img src={pfp} alt="" />Sajal Sharma</h3>
                    <h3>1900</h3>
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default ServiceListing