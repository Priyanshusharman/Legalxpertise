import { useEffect } from "react";
import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    //use to google Translate to translat web page;
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false
            },
            "google_translate_element"
        );
    };
    useEffect(() => {
        window.googleTranslateElementInit = googleTranslateElementInit;
    }, []);
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">LegalXpertise</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>

                        <Link className="nav-link mx-3" to="/loginuser">Sign In</Link>
                        <Link className="nav-link mx-3" to="/signupuser" aria-disabled="true">Register</Link>
                       
                        <div id="google_translate_element"></div>

                    </div>
                </div>
            </nav>
        </>
    )
}
