import {AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";

function ChartGradientDefs() {
    return (
        <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00c6ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0072ff" stopOpacity={0}/>
            </linearGradient>
        </defs>
    );
}

export default function HomeChart() {
    const data = [
        {name: "Mon", value: 45},
        {name: "Tue", value: 80},
        {name: "Wed", value: 60},
        {name: "Thu", value: 95},
    ];

    const tooltipStyle = {
        backgroundColor: "#1e293b",
        border: "none",
        borderRadius: "0.5rem",
        color: "#fff",
    };

    return (
        <section className={`w-full h-56 py-4 px-2 rounded-md shadow-custom bg-gradient-to-br from-primary-bg via-main-bg to-primary-bg @2xl/main:h-70`}>
            <h2 className="text-lg font-semibold mb-3">Weekly Activity</h2>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <ChartGradientDefs/>

                    <XAxis
                        dataKey="name"
                        stroke="var(--color-secondary-txt)"
                        tickLine={false}
                        axisLine={false}
                    />
                    <YAxis
                        stroke="#bbb"
                        tickLine={false}
                        axisLine={false}
                    />
                    <Tooltip contentStyle={tooltipStyle}/>

                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#00c6ff"
                        strokeWidth={3}
                        fillOpacity={1}
                        fill="url(#colorValue)"
                    />
                </AreaChart>
            </ResponsiveContainer>
        </section>
    );
}