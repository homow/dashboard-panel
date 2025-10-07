import TopBar from "@/layout/TopBar";
import MainLayout from "@/layout/MainLayout";
import SideBar from "@/layout/SideBar";

export default function App() {
    return (
        <div id="app-container" className="flex flex-row">
            <SideBar/>
            <div>
                <TopBar/>
                <MainLayout/>
            </div>
        </div>
    )
}
