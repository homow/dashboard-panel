import TotalSalesChart from "./TotalChartLine.jsx";
import PerformanceChart from "./PerformanceChart.jsx";

export default function TopSection() {
    return (
        <section className={"overflow-hidden"}>
            <TotalSalesChart/>
            <PerformanceChart/>
        </section>
    )
}
