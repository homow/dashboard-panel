import {MobileNavProvider, useMobileNav} from "@/context/MobileNavContext";
import AppRoutes from "@/routes/AppRoutes";
import Overlay from "@components/ui/Overlay";

function InnerMainLayout() {
    const {openMobileNav, setOpenMobileNav} = useMobileNav();

    return (
        <main id="main" className={"relative h-full pb-5 space-y-6 @container/main"}>
            <Overlay/>

            {/* Routes */}
            <AppRoutes/>
        </main>
    );
}

export default function MainLayout() {
    return (
        <MobileNavProvider>
            <InnerMainLayout/>;
        </MobileNavProvider>
    );
};