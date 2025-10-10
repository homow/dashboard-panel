import AppRoutes from "@/routes/AppRoutes.jsx";
import Footer from "./Footer.jsx";

export default function MainLayout({className}) {
    return (
        <div className={`relative h-full ${className}`}>
            <div id="main-content" className={"h-full"}>
                
                {/* Routes */}
                <AppRoutes/>
            </div>
            
            {/* footer */}
            <Footer/>
        </div>
    )
}
