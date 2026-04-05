import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip,
    ResponsiveContainer
} from "recharts";
const COLORS = ["#2563eb", "#16a34a", "#dc2626", "#9333ea", "#a78bfa", "#6ee7b7"];

export default function CategoryChart({ data }) {
    const categoryTotals = {};
    data.forEach((t) => {
        if (t.type === "expense") {
            if(!categoryTotals[t.category]) {
            categoryTotals[t.category] = 0;
            }
            categoryTotals[t.category] += t.amount;
        }
    });
    const chartData = Object.keys(categoryTotals).map((key) => ({
        name: key,
        value: categoryTotals[key]
    }));
    return (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 ">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200 ">Expense by Category</h3>
            <div className="flex justify-center">
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={chartData}
                        dataKey="value"
                        nameKey="name"
                        outerRadius={100}
                        label
                    >
                        {chartData.map((entry, index) => (  
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
            </div>
        </div>
    );
}