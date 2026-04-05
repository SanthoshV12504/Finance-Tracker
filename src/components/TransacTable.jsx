import { useState } from "react";
import { sampleTransactions } from "../datas/sampletransactions";
export default function TransacTable({ data = sampleTransactions, hideFilters = false, title = "Transactions"}) {
    const [search,setSearch] = useState("");
    const [category,setCategory] = useState("All");
    const sortedtransactions = [...data].sort((a, b) => new Date(b.date) - new Date(a.date));
    const filterTransactions = sortedtransactions.filter(t => {
        const matchesSearch = t.description.toLowerCase().includes(search.toLowerCase()) ||
                              t.category.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category.toLowerCase() === "all" || t.category.toLowerCase() === category.toLowerCase();
        return matchesSearch && matchesCategory;
    });
    return (
        <div className="bg-white dark:bg-gray-800 shadow mt-8 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">{title}</h3>
                {!hideFilters && (
                    <div className="flex flex-col sm:flex-row gap-4 mb-4">
                        <input
                            type="text"
                            placeholder="Search transactions..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="border rounded-lg py-2 px-3 w-full sm:w-64 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            {search && (
                                <button onClick={() => setSearch("")} className="px-3 py-2 bg-gray-200  dark:bg-gray-600 text-sm rounded-lg hover:bg-gray-300 dark:hover:bg-gray-500">
                                    Clear
                                </button>
                            )}
                            <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="border rounded-lg py-2 px-3 w-auto bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                <option value="All">All</option>
                                <option value="Food">Food</option>
                                <option value="Salary">Salary</option>
                                <option value="Utilities">Utilities</option>
                                <option value="Retail">Retail</option>
                                <option value="Health">Health</option>
                            </select>
                        </div>
                    )}

            <div className="overflow-x-auto pb-2">
                <table className="min-w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b text-gray-600 dark:text-gray-300">
                            <th className="py-2">Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Type</th>
                            <th className="text-right">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterTransactions.length === 0 ? (
                                <tr>
                                    <td colSpan="5" className="py-4 text-center text-gray-500 dark:text-gray-400">
                                        No transactions found.
                                    </td>
                                </tr>
                        ) : (
                            filterTransactions.map((t) => (
                                <tr key={t.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition duration-200">
                                    <td className="py-3">{new Date(t.date).toLocaleDateString()}</td>
                                    <td>{t.description}</td>
                                    <td>{t.category}</td>
                                <td>
                                    <span className={t.type === "income" ? "text-green-600 font-medium" : "text-red-600 font-medium"}>
                                        {t.type}
                                    </span>
                                </td>
                                <td className="text-right font-medium">
                                    {new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(t.amount)}
                                </td>
                                </tr>
                        )))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}