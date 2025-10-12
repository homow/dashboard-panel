import {useEffect, useState} from "react";

export default function useDynamicChart() {
    const [chart, setChart] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let mounted = true;

        import("recharts").then(module => {
            if (mounted) {
                setChart(module)
                setLoading(false);
            }
        }).catch(err => {
            console.log("Error Loading Recharts", err);
            setLoading(false);
        });

        return () => {
            mounted = false;
        }
    }, []);

    const fallback = <p className={"text-secondary-txt text-xl text-center p-4"}>Loading Chart...</p>;

    return {chart, fallback, loading};
};