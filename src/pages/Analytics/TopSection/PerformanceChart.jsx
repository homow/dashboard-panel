import useDynamicChart from "@/hooks/useDynamicChart.jsx"

const data = [
    {month: 'Jan', income: 80, netWorth: 120},
    {month: 'Feb', income: 85, netWorth: 100},
    {month: 'Mar', income: 90, netWorth: 95},
    {month: 'Apr', income: 70, netWorth: 60},
    {month: 'May', income: 75, netWorth: 65},
    {month: 'Jun', income: 85, netWorth: 90},
]

export default function PerformanceChart({className}) {
    const {chart, fallback, loading} = useDynamicChart()

    if (!chart || loading) return fallback

    const {
        Radar,
        RadarChart,
        PolarGrid,
        PolarAngleAxis,
        PolarRadiusAxis,
        Legend,
        Tooltip,
        ResponsiveContainer,
    } = chart

    return (
        <div className={`main-components p-0 ${className}`}>
            <p className={"text-lg md:text-xl font-medium text-center pt-2"}>Performance Chart</p>

            <ResponsiveContainer width="100%" height={350}>
                <RadarChart outerRadius="75%" data={data}>
                    <PolarGrid stroke="var(--color-secondary-txt)"/>
                    <PolarAngleAxis dataKey="month" tick={{fontSize: 12, fill: "var(--color-secondary-txt)"}}/>
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{fontSize: 10, fill: "var(--color-secondary-txt)"}}/>
                    <Radar
                        name="Income"
                        dataKey="income"
                        stroke="var(--color-violet-500)"
                        fill="#8B5CF6"
                        fillOpacity={0.4}
                    />
                    <Radar
                        name="Net Worth"
                        dataKey="netWorth"
                        stroke="var(--color-sky-500)"
                        fill="#3B82F6"
                        fillOpacity={0.4}
                    />
                    <Legend wrapperStyle={{fontSize: 12}}/>
                    <Tooltip
                        formatter={(value, name) => [`${value}`, name === "income" ? "Income" : "Net Worth"]}
                        labelStyle={{fontWeight: "bold", color: "#111827"}}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}