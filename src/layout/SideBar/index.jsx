import React from 'react'
import TopSideBar from "@/layout/SideBar/TopSideBar/TopSideBar.jsx";

export default function SideBar() {
    return (
        <div id="side-bar" className={"fixed top-0 pr-4.5 w-custom"}>
            <TopSideBar/>
        </div>
    )
}
