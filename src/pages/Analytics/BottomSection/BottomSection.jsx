import {lazy} from "react";

const TotalSalesChart = lazy(() => import("./TotalChartLine.jsx"));
const PerformanceChart = lazy(() => import("./PerformanceChart.jsx"));
const SalesOverviewChart = lazy(() => import("./SalesOverviewChart.jsx"));

export default function BottomSection() {
    return (
        <section className={"grid grid-cols-1 gap-6 @2xl/main:grid-cols-2 @7xl/main:grid-cols-3"}>
            <TotalSalesChart className={"@2xl/main:col-span-2 @7xl/main:col-span-1 @7xl/main:h-auto"}/>
            <PerformanceChart className={""}/>
            <SalesOverviewChart className={""}/>
        </section>
    )
}
