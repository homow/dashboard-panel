import {Outlet} from "react-router-dom";
import {MobileNavProvider, useMobileNav} from "@/context/MobileNavContext";
import Overlay from "@components/ui/Overlay";
import SvgDefs from "@components/ui/icons/SvgDefs";
import SideBar from "@/layout/SideBar";
import TopBar from "@/layout/TopBar";
import Footer from "@/layout/Footer";
import {cn} from "@/lib/utils.js";

function InnerMainLayout() {
    const {openMobileNav, setOpenMobileNav} = useMobileNav();

    return (
        <section
            id="app-container"
            className={cn("flex flex-row min-h-svh")}
        >

            {/* svg icons */}
            <SvgDefs/>

            {/* overlay */}
            <Overlay
                flag={openMobileNav}
                setFlag={setOpenMobileNav}
            />

            {/* side bar menu and links */}
            <SideBar/>

            <section
                className={cn("flex-1 flex flex-col ml-custom transition-all px-3 sm:px-6")}
            >
                <main
                    id="main"
                    className={"@container/main relative h-full pb-5 space-y-6"}
                >
                    {/* top bar | header */}
                    <TopBar/>

                    {/* Routes */}
                    <Outlet/>

                    {/* footer */}
                    <Footer/>
                </main>
            </section>
        </section>
    );
}

export default function MainLayout() {
    return (
        <MobileNavProvider>
            <InnerMainLayout/>
        </MobileNavProvider>
    );
};