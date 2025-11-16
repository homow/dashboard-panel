import {lazy} from "react";
import {useRoutes} from "react-router-dom";

import SuspenseBoundary from "@components/ui/SuspenseBoundary.jsx";
const Dashboard = lazy(() => import("@pages/Dashboard"));
const Analytics = lazy(() => import("@pages/Analytics"));
const User = lazy(() => import("@pages/User"));
const Rules = lazy(() => import("@pages/Rules"));

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
