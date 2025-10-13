import TotalSalesChart from "./TotalChartLine.jsx";
import PerformanceChart from "./PerformanceChart.jsx";
import SalesOverviewChart from "./SalesOverviewChart.jsx";

export default function TopSection() {
    return (
        <section className={"grid grid-cols-1 gap-6 @2xl/main:grid-cols-2 @7xl/main:grid-cols-3"}>
            <TotalSalesChart className={"@2xl/main:col-span-2 @7xl/main:col-span-1 @7xl/main:h-auto"}/>
            <PerformanceChart className={""}/>
            <SalesOverviewChart className={""}/>
        </section>
    )
}
