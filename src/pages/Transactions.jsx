import TransacTable from "../components/TransacTable";
export default function Transactions({ role }) {
    return (
        <div className="p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Transactions</h2>
            {role === "admin" && (
                <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Add Transaction</button>
            )}    
            <TransacTable title="All Transactions"/>
        </div>
    );
}