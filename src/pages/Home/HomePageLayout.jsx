import TopSection from "./TopSection/TopSection.jsx";
import SalaryChart from "@pages/Home/SalaryChart/SalaryChart.jsx";
import BottomSection from "./BottomSection/BottomSection.jsx";

export default function HomePageLayout() {
    return (
        <>
            <TopSection/>
            <SalaryChart/>
            <BottomSection/>
        </>
    )
}