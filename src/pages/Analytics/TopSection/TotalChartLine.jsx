import useDynamicChart from "@/hooks/useDynamicChart.jsx";

const salesData = [
    {month: 'Jan', sales: 3200},
    {month: 'Feb', sales: 4100},
    {month: 'Mar', sales: 3800},
    {month: 'Apr', sales: 5200},
];

export default function TotalSalesChart() {

    const {chart, fallback, loading} = useDynamicChart();

    if (!chart || loading) return fallback;

    const {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend} = chart;

    return (
        <ResponsiveContainer className={"overflow-hidden"} width="100%" height={300}>
            <LineChart data={salesData} margin={{top: 20, right: 20, left: 0, bottom: 0}}>

                <CartesianGrid vertical={false} stroke="var(--color-secondary-txt)" strokeDasharray="4 4"/>

                <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    stroke="var(--color-sky-500)"
                    tick={{fontSize: 13, fontWeight: 600}}
                    padding={{left: 10, right: 10}}
                />

                <YAxis
                    axisLine={false}
                    tickLine={false}
                    stroke="var(--color-sky-500)"
                    tick={{fontSize: 13, fontWeight: 500}}
                />

                <Tooltip
                    contentStyle={{backgroundColor: "var(--color-sky-600)", borderRadius: 10, color: "#f0f0f0"}}
                    labelStyle={{fontWeight: 700}}
                    cursor={{stroke: "var(--color-sky-300)", strokeWidth: 2, strokeDasharray: "6 6"}}
                />

                <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="url(#lineGradient)"
                    strokeWidth={4}
                    dot={{r: 0}}
                    activeDot={{r: 6, fill: "var(--color-sky-400)", shape: "square"}}
                />

                <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="var(--color-sky-400)"/>
                        <stop offset="100%" stopColor="var(--color-sky-700)"/>
                    </linearGradient>
                </defs>

                <Legend verticalAlign="top" height={36}/>
            </LineChart>
        </ResponsiveContainer>
    );
}
