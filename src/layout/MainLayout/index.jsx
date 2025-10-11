import AppRoutes from "@/routes/AppRoutes.jsx";
import Footer from "./Footer.jsx";

export default function MainLayout() {
    return (
        <section className={`relative h-full`}>
            <main id="main-content" className={"h-full @container"}>
                
                {/* Routes */}
                <AppRoutes/>
            </main>
            
            {/* footer */}
            <Footer/>
        </section>
    )
}
