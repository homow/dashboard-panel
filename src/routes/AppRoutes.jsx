import {lazy} from "react";
import {useRoutes} from "react-router-dom";
import SuspenseBoundary from "@components/ui/SuspenseBoundary";
import PublicRoutes from "@/routes/PublicRoutes";
import PrivateRoutes from "@/routes/PrivateRoutes";
import MainLayout from "@/layout/MainLayout";

const lazyWithSuspense = (importFunc, className) => {
    const Component = lazy(importFunc);

    return props => (
        <SuspenseBoundary className={className}>
            <Component {...props}/>
        </SuspenseBoundary>
    );
};

const Login = lazyWithSuspense(() => import("@pages/Login"));
const Dashboard = lazyWithSuspense(() => import("@pages/Dashboard"));
const Analytics = lazyWithSuspense(() => import("@pages/Analytics"));
const User = lazyWithSuspense(() => import("@pages/User"));
const Rules = lazyWithSuspense(() => import("@pages/Rules"));

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
