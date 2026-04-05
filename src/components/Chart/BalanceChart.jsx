import {
    LineChart,
    Line,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from "recharts";

export default function BalanceChart({ data, darkMode }) {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 ">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">Balance Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <defs>
                        <linearGradient id="balanceGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#22d3ee" stopOpacity={0.5} />
                            <stop offset="95%" stopColor="#22d3ee" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="4 4" stroke={ darkMode ? "#334155" : "#e5e7eb" } />
                    <XAxis dataKey="date" stroke="#94a3b8" axisLine={false} tickLine={false} />
                    <YAxis stroke="#94a3b8" axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{backgroundColor: darkMode ? "#0f172a" : "#ffffff", 
                        border: "none", 
                        borderRadius: "10px", 
                        color: darkMode ? "#ffffff" : "#111827", boxShadow: "0 8px 20px rgba(0, 0, 0, 0.2)"}} />
                    <Area type="monotone" dataKey="balance" stroke="#2563eb" fillOpacity={1} fill="url(#balanceGradient)" tooltipType="none"/>
                    <Line type="monotone" dataKey="balance" stroke="#22d3ee" strokeWidth={3} dot={false} activeDot={{ r: 6}} fill="url(#balanceGradient)" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}