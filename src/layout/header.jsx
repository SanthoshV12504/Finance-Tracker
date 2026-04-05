import { useLocation } from "react-router-dom";
export default function Header({ setIsOpen, role, setRole, darkMode, setDarkMode }) {
    const location = useLocation();
    const pageTitle = location.pathname === "/transactions" ? "Transactions" :
        location.pathname === "/insights" ? "Insights" : "Dashboard";
    return (
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white shadow p-4 flex items-center justify-between transition-colors duration-300">
            <button className="md:hidden text-2xl mr-4" onClick={() => setIsOpen(true)}>☰</button>
            <div className="flex items-center gap-3">
                <button onClick={() => setDarkMode(!darkMode)} className="mr-3 px-3 py-1 border rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-700">
                 {darkMode ? "🌙" : "☀️"}
                </button>
                <select className="border rounded px-2 py-1 bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
                 value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">User</option>
                    <option value="admin">Admin</option>
                </select>
            </div>
        </div>
    
    );
}


        