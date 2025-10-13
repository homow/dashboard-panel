import useDynamicChart from "@/hooks/useDynamicChart.jsx"

const salesData = [
    {name: 'Apparel', value: 1840},
    {name: 'FMCG', value: 1840},
    {name: 'Electronic', value: 11420},
    {name: 'Other Sales', value: 11420},
]

const COLORS = ['#8B5CF6', '#6366F1', '#3B82F6', '#0EA5E9']

export default function SalesOverviewChart({className}) {
    const {chart, fallback, loading} = useDynamicChart()

    if (!chart || loading) return fallback

    const {
        PieChart,
        Pie,
        Cell,
        ResponsiveContainer,
        Tooltip,
        Legend,
    } = chart

    return (
        <div className={`main-components p-0 overflow-hidden flex flex-col gap-2 ${className}`}>
            <p className="font-medium text-center text-lg md:text-xl pt-2">Sales Overview</p>

            <ResponsiveContainer width="100%" height={280}>
                <PieChart>
                    <Pie
                        data={salesData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={50}
                        outerRadius={90}
                    >
                        {salesData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                        ))}
                    </Pie>
                    <Tooltip
                        formatter={(value, name) => [`$${value.toLocaleString()}`, name]}
                        contentStyle={{fontSize: '0.75rem'}}
                    />
                    <Legend wrapperStyle={{fontSize: '0.75rem'}}/>
                </PieChart>
            </ResponsiveContainer>

            <div style={{textAlign: 'center', fontSize: '0.875rem', fontWeight: '600'}}>
                Total Sales: $86,400
            </div>
        </div>
    )
}