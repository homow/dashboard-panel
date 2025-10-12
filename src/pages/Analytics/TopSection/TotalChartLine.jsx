import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';

const salesData = [
    {month: 'Jan', sales: 3200},
    {month: 'Feb', sales: 4100},
    {month: 'Mar', sales: 3800},
    {month: 'Apr', sales: 5200},
    {month: 'May', sales: 4800},
    {month: 'Jun', sales: 4545},
];

export default function TotalSalesChart() {
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