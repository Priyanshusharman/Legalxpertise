import React from 'react'
import Navbar from '../component/Navbar'
import Navjustic from '../component/Navjustic'
import Footer from '../component/Footer'
import '../css/aboutus.css'

const AboutUs = () => {
    return (
        <div>
            <Navbar />
            <Navjustic />
            <div className="about-us">
                <h1>About Us</h1>
            </div>
            <div className="about-us-text">
                <h4>Welcome to LegalXpertise, your gateway to accessible and transparent legal services in India. Our journey began with a simple yet profound vision: to bridge the gap between legal service providers and individuals seeking legal support. We believe that everyone deserves equal access to justice, and we're here to make it a reality.</h4>
            </div>
            <div className="mid-content">
                <div className="mission">
                    <h1>Our Mission</h1>
                    <div className="mission-content">
                        <img src="https://img.freepik.com/premium-vector/successful-businessmen-climbing-his-mind-holding-victory-flag-business-purpose-success-mi_954303-246.jpg?w=826" alt="" />
                        <div className="mission-description">
                            <h5>
                                At LegalXperts, our mission is clear: to empower individuals and businesses across India by connecting them with skilled legal service providers. We are dedicated to:
                            </h5>
                            <ul>
                                <li>
                                    Accessibility: We aim to break down barriers and make legal services within reach for all, regardless of background or location.
                                </li>
                                <li>Transparency: We foster a transparent environment where users can make informed decisions about their legal needs.</li>
                                <li>Quality: We uphold the highest standards of quality in legal services by partnering with experienced professionals.</li>
                            </ul>

                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs