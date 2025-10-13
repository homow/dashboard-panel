import {lazy} from "react";
import TopSection from "./TopSection/TopSection.jsx";
const SalaryChart = lazy(() => import("./SalaryChart/SalaryChart.jsx"));
import BottomSection from "./BottomSection/BottomSection.jsx";

export default function DashboardLayout() {
    return (
        <>
            <TopSection/>
            <SalaryChart/>
            <BottomSection/>
        </>
    )
}