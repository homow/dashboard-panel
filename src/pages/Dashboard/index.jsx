import {useEffect} from "react";
import DashboardLayout from "./DashboardLayout.jsx";

export default function Dashboard() {
    useEffect(() => {
        document.title = 'Dashboard | Admin Panel';
    }, [])

    return <DashboardLayout/>;
}
