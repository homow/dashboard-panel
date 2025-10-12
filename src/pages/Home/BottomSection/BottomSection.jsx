import DevMeetUp from "./DevMeetUp.jsx";
import RadialChart from "./RadialChart.jsx"

export default function BottomSection() {
    return (
        <section className={"mt-8 flex flex-col gap-6 @2xl/main:flex-row"}>
            <DevMeetUp/>
            <RadialChart className={"h-70"}/>
        </section>
    )
}
