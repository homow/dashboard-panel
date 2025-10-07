import {useState} from 'react'
import SideBarHeader from "@/layout/SideBar/SideBarHeader/SideBarHeader.jsx";

export default function SideBar() {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <div id="side-bar" className={`fixed overflow-hidden top-0 pr-4.5 transition-all w-custom`}>
            <SideBarHeader collapsed={collapsed} setCollapsed={setCollapsed}/>
        </div>
    )
}
