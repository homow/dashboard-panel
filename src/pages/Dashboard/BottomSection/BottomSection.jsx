import DevMeetUp from "./DevMeetUp";
import LazyWithSuspense from "@components/ui/suspense/LazyWithSuspense";

const RadialChart = LazyWithSuspense(() => import("./RadialChart"));
const UserGrowthAreaChart = LazyWithSuspense(() => import("./AreaChart"));

export default function BottomSection() {
    return (
        <section className={"overflow-hidden grid grid-cols-1 gap-6 @2xl/main:grid-cols-2 @6xl/main:grid-cols-3"}>
            {/* meet up section */}
            <DevMeetUp/>

            {/* radial chart */}
            <RadialChart className={"h-74 py-7 @2xl/main:h-auto @2xl/main:p-10"}/>

            {/* area chart */}
            <UserGrowthAreaChart className={"h-74 @2xl/main:col-span-2 @6xl/main:col-span-1 @6xl/main:h-auto"}/>
        </section>
    )
};