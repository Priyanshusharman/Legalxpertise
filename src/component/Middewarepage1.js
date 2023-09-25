import React from 'react'
import '../css/styles.css'

export default function Middewarepage1() {
    return (
        <>
            {/* <!-- Carousel--> */}

            <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" className="d-block w-100" alt="abc" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1423592707957-3b212afa6733?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" className="d-block w-100" alt="cde" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://images.unsplash.com/photo-1593115057322-e94b77572f20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="d-block w-100" alt="cde" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <!-- Accordian --> */}
            <div className="page4">
                <div className="faq">
                    <div className="faq-left">
                        <h1>Questions?
                            We’re here to help </h1><br />
                        <label>Check out our FAQs or talk to a live customer care specialist by phone, chat, or email.</label>
                    </div>
                    <div className="questions">
                        <div className="wrapper">
                            <div className="container">
                                <div className="question">
                                    What Is Online Legal Consulation?
                                </div>
                                <div className="answercont">
                                    <div className="answer">
                                        Online Legal consultation or online Lawyer consultation is a method to connect Users and Lawyers
                                        virtually. It is a convenient and easy way to get online Lawyer advice using LegalXpertise website
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="question">
                                    What is arbitration, and when should I consider using an arbitrator?
                                </div>
                                <div className="answercont">
                                    <div className="answer">
                                        Arbitration is an alternative dispute resolution method where a neutral third party, known as an
                                        arbitrator, helps parties resolve disputes outside of court. Consider arbitration when you want a quicker
                                        and more confidential resolution to a legal matter, such as contract disputes or workplace conflicts
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="question">
                                    How do lawyers charge for their services?
                                </div>
                                <div className="answercont">
                                    <div className="answer">
                                        Lawyers typically charge for their services in one of three ways: hourly rates, flat fees, or
                                        contingency fees (usually in personal injury cases). The billing method varies depending on the type of
                                        legal service and the attorney's policies.
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="question">
                                    What is the role of a mediator in resolving disputes?
                                </div>
                                <div className="answercont">
                                    <div className="answer">
                                        Mediators are neutral third parties who facilitate communication and negotiation between conflicting
                                        parties to help them reach a mutually acceptable agreement. They do not make binding decisions but assist
                                        in finding common ground.
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="question">
                                    What's the difference between civil and criminal lawyers?
                                </div>
                                <div className="answercont">
                                    <div className="answer">
                                        Civil lawyers handle cases involving disputes between individuals, businesses, or organizations, such as
                                        personal injury claims, divorce, and contract disputes. Criminal lawyers, on the other hand, defend
                                        individuals accused of committing crimes and work within the criminal justice system to protect their
                                        rights
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="question">
                                    Can I change lawyers if I'm not satisfied with my current one?
                                </div>
                                <div className="answercont">
                                    <div className="answer">
                                        Yes, you have the right to change lawyers if you are not satisfied with their representation. However,
                                        consider the potential impact on your case and consult with a new attorney before making the switch
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id="press">
                <h1>Our Partners</h1>
                <img className="press-img" src="images/techcrunch.png" alt="tc-logo" />
                <img className="press-img" src="images/tnw.png" alt="tnw-logo" />
                <img className="press-img" src="images/bizinsider.png" alt="biz-insider-logo" />
                <img className="press-img" src="images/mashable.png" alt="mashable-logo" />

            </section>
        </>
    )
}
