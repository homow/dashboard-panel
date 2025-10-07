import React from 'react'
import Footer from "./Footer/Footer.jsx";

export default function MainLayout({className}) {
    return (
        <div className={`relative ${className}`}>
            <div id="main-content" className={"bg-main-bg py-3 h-full"}>
            </div>
            <Footer/>
        </div>
    )
}
