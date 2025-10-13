import TopSection from "./TopSection/TopSection.jsx";
const SalaryChart = lazy(() => import("./SalaryChart/SalaryChart.jsx"));
import BottomSection from "./BottomSection/BottomSection.jsx";
import {lazy} from "react";

export default function DashboardLayout() {
    return (
        <>
            <TopSection/>
            <SalaryChart/>
            <BottomSection/>
        </>
    )
}