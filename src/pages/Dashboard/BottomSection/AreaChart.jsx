import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const data = [
    {name: "Jan", users: 400},
    {name: "Feb", users: 300},
    {name: "Mar", users: 500},
    {name: "Apr", users: 200},
    {name: "May", users: 600},
];

export default function UserGrowthAreaChart({className}) {
    return (
        <div className={`w-full bg-main-bg rounded-md shadow-custom py-4 ${className}`}>
            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data} margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                    <defs>
                        <linearGradient id="colorSky" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0}/>
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name" stroke="#94a3b8"/>
                    <YAxis stroke="#94a3b8"/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area
                        type="monotone"
                        dataKey="users"
                        stroke="#0ea5e9"
                        fill="url(#colorSky)"
                        strokeWidth={3}
                    />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}