import {useEffect} from "react";
import AnalyticsLayout from "./AnalyticsLayout.jsx";

export default function Analytics() {
    useEffect(() => {
        document.title = 'Analytics | Dashboard';
    }, [])

    return <AnalyticsLayout/>;
}
