import AppRoutes from "@/routes/AppRoutes.jsx";
import Footer from "./Footer.jsx";

export default function MainLayout({className}) {
    return (
        <section className={`relative h-full ${className}`}>
            <main id="main-content" className={"h-full"}>
                
                {/* Routes */}
                <AppRoutes/>
            </main>
            
            {/* footer */}
            <Footer/>
        </section>
    )
}
