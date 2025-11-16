import {lazy} from "react";
import TopSection from "./TopSection/TopSection";
const SalaryChart = lazy(() => import("./SalaryChart/SalaryChart"));
import BottomSection from "./BottomSection/BottomSection";

export default function DashboardLayout() {
    return (
        <>
            <TopSection/>
            <SalaryChart/>
            <BottomSection/>
        </>
    )
}