import React from "react";
import {
    RadialBarChart,
    RadialBar,
    Legend,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

function RadialGradientDefs() {
    return (
        <defs>
            <linearGradient id="gradSky" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#7dd3fc" stopOpacity="1"/>
                <stop offset="60%" stopColor="#0ea5ff" stopOpacity="1"/>
                <stop offset="100%" stopColor="#0369a1" stopOpacity="1"/>
            </linearGradient>
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#0ea5ff" floodOpacity="0.08"/>
            </filter>
        </defs>
    );
}

export default function ModernRadialChart({className = ""}) {
    const data = [
        {name: "UI", value: 75, fill: "url(#gradSky)"},
        {name: "API", value: 50, fill: "rgba(14,165,255,0.35)"},
        {name: "Auth", value: 30, fill: "rgba(14,165,255,0.18)"},
    ];

    const tooltipStyle = {
        backgroundColor: "#0f172a",
        border: "none",
        borderRadius: "0.5rem",
        color: "#fff",
        padding: "0.5rem 0.6rem",
    };

    return (
        <div
            className={`relative w-full px-1 rounded-md bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 shadow-lg ${className}`}
            aria-hidden={false}
        >
            <h3 className="font-medium text-slate-200 mb-2">Module Health</h3>

            <div className="absolute inset-0 top-5 flex items-center justify-center pointer-events-none">
                <div className="text-center pointer-events-none">
                    <div className="text-xl font-bold text-white">72%</div>
                    <div className="text-xs text-slate-300 mt-1">Overall</div>
                </div>
            </div>

            <div className="relative w-full h-full">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart
                        innerRadius="60%"
                        outerRadius="100%"
                        data={data}
                        startAngle={90}
                        endAngle={-270}
                        barGap={6}
                    >
                        <RadialGradientDefs/>

                        <RadialBar
                            minAngle={15}
                            clockWise
                            dataKey="value"
                            cornerRadius={10}
                            background={{fill: "rgba(255,255,255,0.04)"}}
                        />

                        <Tooltip
                            contentStyle={tooltipStyle}
                            itemStyle={{color: "#e6f6ff"}}
                            cursor={false}
                            formatter={(value, name) => [`${value}%`, name]}
                        />

                        <Legend
                            iconSize={8}
                            layout="horizontal"
                            verticalAlign="bottom"
                            align="center"
                            wrapperStyle={{color: "#94a3b8", paddingTop: 8}}
                        />
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
