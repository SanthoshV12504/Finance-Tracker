import SummaryCard from "../components/SummaryCard";
import { sampleTransactions } from "../datas/sampletransactions";
import BalanceChart from "../components/Chart/BalanceChart";
import CategoryChart from "../components/Chart/CategoryChart";
import TransacTable from "../components/TransacTable";  
export default function Dashboard({ darkMode }) {
    const totalIncome = sampleTransactions
        .filter(t => t.type === 'income')
        .reduce((sum, t) => sum + t.amount, 0);
    const totalExpenses = sampleTransactions
        .filter(t => t.type === 'expense')
        .reduce((sum, t) => sum + t.amount, 0);
    const netBalance = totalIncome - totalExpenses;
    let currentBalance = 0;
    const sortedTransactions = [...sampleTransactions].sort((a, b) => new Date(a.date) - new Date(b.date)); 
    const chartData = sortedTransactions.map((t) => {
        if (t.type === 'income') {
            currentBalance += t.amount;
        } else {
            currentBalance -= t.amount;
        }
        return {
        date: t.date,
        balance: currentBalance
        };
    });
    const recentTransactions = [...sampleTransactions].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
    return (
        <div className="space-y-8">
            <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">Financial Summary</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <SummaryCard title="Total Income" value={totalIncome.toFixed(2)} color="text-green-600" />
                <SummaryCard title="Total Expenses" value={totalExpenses.toFixed(2)} color="text-red-600" />
                <SummaryCard title="Net Balance" value={netBalance.toFixed(2)} color="text-blue-600" />
            </div>
            <BalanceChart data={chartData} darkMode={darkMode} />
            <CategoryChart data={sampleTransactions} />
            <TransacTable data={recentTransactions} hideFilters={true} title="Recent Transactions" />
        </div>
    );
}