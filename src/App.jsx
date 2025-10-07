import TopBar from "@/layout/TopBar";
import MainLayout from "@/layout/MainLayout";
import SideBar from "@/layout/SideBar";
import SvgDefs from "@/components/ui/SvgDefs.jsx";

export default function App() {
    return (
        <div id="app-container" className="flex flex-row">
            <SvgDefs/>

            <SideBar/>

            <div className={"flex-1"}>
                <TopBar/>
                <MainLayout/>
            </div>
        </div>
    )
}
