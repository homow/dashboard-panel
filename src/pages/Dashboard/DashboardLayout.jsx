import LazyWithSuspense from "@ui/suspense/LazyWithSuspense";
import TopSection from "./TopSection/TopSection";
const SalaryChart = LazyWithSuspense(() => import("./SalaryChart/SalaryChart"));
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