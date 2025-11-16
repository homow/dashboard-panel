import {Outlet} from "react-router-dom";
import {MobileNavProvider, useMobileNav} from "@/context/MobileNavContext";
import Overlay from "@components/ui/Overlay";
import SvgDefs from "@components/ui/icons/SvgDefs";
import SideBar from "@/layout/SideBar";
import TopBar from "@/layout/TopBar";
import Footer from "@/layout/Footer";

function InnerMainLayout() {
    const {openMobileNav, setOpenMobileNav} = useMobileNav();

    return (
        <section id="app-container" className="flex flex-row min-h-screen">

            {/* svg icons */}
            <SvgDefs/>

            {/* overlay */}
            <Overlay
                flag={openMobileNav}
                setFlag={setOpenMobileNav}
            />

            {/* side bar menu and links */}
            <SideBar/>

            <main
                id="main"
                className={"relative h-full pb-5 space-y-6 @container/main mr-custom"
            }>
                {/* top bar | header */}
                <TopBar/>

                {/* Routes */}
                <Outlet/>

                {/* footer */}
                <Footer/>
            </main>
        </section>
    );
}

export default function MainLayout() {
    return (
        <MobileNavProvider>
            <InnerMainLayout/>;
        </MobileNavProvider>
    );
};