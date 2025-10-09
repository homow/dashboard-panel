import {useState} from 'react'
import SideBarHeader from "@/layout/SideBar/SideBarHeader/SideBarHeader.jsx";
import SideBarMenu from "@/layout/SideBar/SideBarMenu/SideBarMenu.jsx";

export default function SideBar({mobileNavOpen}) {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div id="side-bar" className={`fixed overflow-hidden top-0 pr-4.5 transition-all text-sm max-md:mobile-nav ${mobileNavOpen ? "max-md:left-0" : "max-md:-left-58"} md:w-custom md:text-base}`}>
            <SideBarHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
            <SideBarMenu collapsed={collapsed}/>
        </div>
    )
}
