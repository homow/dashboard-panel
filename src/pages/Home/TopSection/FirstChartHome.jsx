import {AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer} from "recharts";
// eslint-disable-next-line no-unused-vars
import {motion} from "framer-motion";

const data = [
    {name: "Mon", value: 45},
    {name: "Tue", value: 80},
    {name: "Wed", value: 60},
    {name: "Thu", value: 95},
];

export default function FirstChartHome({className}) {
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7}}
            className={`w-full h-64 p-4 rounded-2xl shadow-lg bg-gradient-to-br from-primary-bg via-main-bg to-primary-bg ${className}`}
        >
            <h2 className="text-lg font-semibold mb-3">Weekly Activity</h2>

            <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                    <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#00c6ff" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#0072ff" stopOpacity={0}/>
                        </linearGradient>
                    </defs>

                    <XAxis dataKey="name" stroke="#bbb" tickLine={false} axisLine={false}/>
                    <YAxis stroke="#bbb" tickLine={false} axisLine={false}/>
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#1e293b",
                            border: "none",
                            borderRadius: "0.5rem",
                            color: "#fff",
                        }}
                    />

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
        </motion.div>
    );
}
