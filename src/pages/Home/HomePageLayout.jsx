import TopSection from "./TopSection/TopSection.jsx";
import FirstChartHome from "./FirstChartHome/FirstChartHome.jsx";

export default function HomePageLayout() {
    return (
        <div className={"pt-12 pb-5 space-y-6"}>
            <TopSection/>
            <FirstChartHome/>
        </div>
    )
}