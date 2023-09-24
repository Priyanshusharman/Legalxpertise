import { useEffect } from "react";
import React from 'react'

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
                    <a className="navbar-brand" href="#">LegalXpertise</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                        </ul>

                        <a className="nav-link mx-3" href="Pages/userLogin.html">Sign In</a>
                        <a className="nav-link mx-3" href="Pages/userRegister.html" aria-disabled="true">Register</a>
                       
                        <div id="google_translate_element"></div>

                    </div>
                </div>
            </nav>
        </>
    )
}
