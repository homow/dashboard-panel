import {useRoutes} from "react-router-dom";
import SuspenseBoundary from "@components/ui/suspense/SuspenseBoundary";
import LazyWithSuspense from "@components/ui/suspense/LazyWithSuspense";
import PublicRoutes from "@/routes/PublicRoutes";
import PrivateRoutes from "@/routes/PrivateRoutes";
import MainLayout from "@/layout/MainLayout";

const Login = LazyWithSuspense(() => import("@pages/Login"));
const Dashboard = LazyWithSuspense(() => import("@pages/Dashboard"));
const Analytics = LazyWithSuspense(() => import("@pages/Analytics"));
const User = LazyWithSuspense(() => import("@pages/User"));
const Rules = LazyWithSuspense(() => import("@pages/Rules"));

const routes = [
    {
        element: <PublicRoutes/>,
        children: [
            {path: "/login", element: <Login/>},
        ]
    },
    {
        element: <PrivateRoutes/>,
        children: [{
            element: <MainLayout/>,
            children: [
                {path: "/", element: <Dashboard/>},
                {path: "analytics", element: <Analytics/>},
                {path: "user", element: <User/>},
                {path: "rules", element: <Rules/>},
                {path: "*",}
            ]
        }]
    },
];

export default function AppRoutes() {
    return (
        <SuspenseBoundary>
            {useRoutes(routes)}
        </SuspenseBoundary>
    );
}
