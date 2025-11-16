import {lazy} from "react";
import {useRoutes} from "react-router-dom";
import SuspenseBoundary from "@components/ui/SuspenseBoundary";

const lazyWithSuspense = (importFunc, className) => {
    const Component = lazy(importFunc);

    return props => (
        <SuspenseBoundary className={className}>
            <Component {...props}/>
        </SuspenseBoundary>
    );
};

const Dashboard = lazyWithSuspense(() => import("@pages/Dashboard"));
const Analytics = lazyWithSuspense(() => import("@pages/Analytics"));
const User = lazyWithSuspense(() => import("@pages/User"));
const Rules = lazyWithSuspense(() => import("@pages/Rules"));

const routes = [
    {path: "/", element: <Dashboard/>},
    {path: "analytics", element: <Analytics/>},
    {path: "user", element: <User/>},
    {path: "rules", element: <Rules/>},
];

export default function AppRoutes() {
    return (
        <SuspenseBoundary>
            {useRoutes(routes)}
        </SuspenseBoundary>
    );
}
