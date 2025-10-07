import TopBar from "@/layout/TopBar";
import MainLayout from "@/layout/MainLayout";
import SideBar from "@/layout/SideBar";
import SvgDefs from "@/components/ui/SvgDefs.jsx";

export default function App() {
    return (
        <div id="app-container" className="flex flex-row">
            <SvgDefs/>

            <SideBar/>

            <div className={"ml-65 flex-1 px-6"}>
                <TopBar/>
                <MainLayout/>
            </div>
        </div>
    )
}
