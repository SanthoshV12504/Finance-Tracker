import { useEffect, useState } from "react"; 
import { sampleTransactions } from "../datas/sampletransactions";
export default function Insights() {
    const expenses = sampleTransactions.filter(t => t.type === "expense");
    const totalTransactions = sampleTransactions.length;
    const highestExpense = Math.max(...expenses.map(t => t.amount));
    const averageExpense = expenses.reduce((sum, t) => sum + t.amount, 0) / expenses.length;
    const categorytotals = {};
    expenses.forEach(t => {
        categorytotals[t.category] = (categorytotals[t.category] || 0) + t.amount;
    });
    const topCategory = Object.keys(categorytotals).reduce((a, b) => categorytotals[a] > categorytotals[b] ? a : b, "");
    const monthlyExpenses = {};
    expenses.forEach(t => {
        const month = t.date.slice(0, 7);
        monthlyExpenses[month] = (monthlyExpenses[month] || 0) + t.amount;
    });
    const [tip, setTip] = useState("");
    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => setTip(data.slip.advice))
            .catch(() => setTip("Track your spending regularly!"));
    }, []);

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Insights</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition">
                    <p className=" text-gray-500 dark:text-gray-300">Top Spending Category</p>
                    <h3 className="text-lg font-semibold mt-2">{topCategory}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition">
                    <p className=" text-gray-500 dark:text-gray-300">Total Transactions</p>
                    <h3 className="text-lg font-semibold mt-2">{totalTransactions}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition">
                    <p className=" text-gray-500 dark:text-gray-300">Highest Expense</p>
                    <h3 className="text-lg font-semibold mt-2">₹{highestExpense.toFixed(2)}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition">
                    <p className=" text-gray-500 dark:text-gray-300">Average Expense</p>
                    <h3 className="text-lg font-semibold mt-2">₹{averageExpense.toFixed(2)}</h3>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition col-span-2">
                    <p className=" text-gray-500 dark:text-gray-300">Monthly Expense Comparison</p>
                    <div className="mt-4">
                        {Object.entries(monthlyExpenses).map(([month, total]) => (
                            <div key={month} className="flex justify-between mb-2 font-semibold">
                                <span>{month}</span>
                                <span>₹{total.toFixed(2)}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-5 hover:shadow-lg hover:-translate-y-1 transition col-span-2">
                    <p className=" text-gray-500 dark:text-gray-300">Tip of the Day</p>
                    <h3 className="text-lg font-semibold mt-2">{tip}</h3>
                </div>
            </div>
        </div>
    );
}
