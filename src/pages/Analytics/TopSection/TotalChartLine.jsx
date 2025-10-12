import {useEffect, useState} from "react";

const salesData = [
    {month: 'Jan', sales: 3200},
    {month: 'Feb', sales: 4100},
    {month: 'Mar', sales: 3800},
    {month: 'Apr', sales: 5200},
    {month: 'May', sales: 4800},
    {month: 'Jun', sales: 4545},
];

export default function TotalSalesChart() {
    const [chart, setChart] = useState(null);

    useEffect(() => {
        import("recharts").then(module => setChart(module));
    }, [])

    if (!chart) return <p className={"text-secondary-txt text-xl text-center"}>Loading Chart...</p>;

    const {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} = chart;

    return (
        <ResponsiveContainer className={"overflow-hidden"} width="100%" height={300}>
            <LineChart data={salesData}>
                <XAxis dataKey="month"/>
                <YAxis/>
                <Tooltip/>
                <Line type="monotone" dataKey="sales" stroke="#22c55e" strokeWidth={2}/>
            </LineChart>
        </ResponsiveContainer>
    );
}