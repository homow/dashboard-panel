import {AuthProvider, useAuth} from "@/context/AuthContext"
import Loading from "@components/ui/Loading";
import AppRoutes from "@/routes/AppRoutes";

function InnerApp() {
    const {loading} = useAuth()

    return (
        loading ? (
            <Loading className={"fixed inset-0 z-10"}/>
        ) : (
            <AppRoutes/>
        )
    )
}

export default function App() {
    return (
        <AuthProvider>
            <InnerApp/>
        </AuthProvider>
    )
}
