import TopSection from "./TopSection/TopSection.jsx";
import SalaryChart from "./SalaryChart/SalaryChart.jsx";
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