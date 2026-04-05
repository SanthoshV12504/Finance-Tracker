export default function SummaryCard({ title, value, color }) {
    return (
        <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-black/30 rounded-xl p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
            <div className="flex justify-between items-center">
                <h3 className="text-sm text-gray-500 dark:text-gray-300 font-medium">{title}</h3>
            </div>
            <p className={`text-3xl font-bold mt-3 ${color}`}>{new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(value)}</p>
        </div>
    );
}