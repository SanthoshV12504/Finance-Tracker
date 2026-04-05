import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Sidebar({isOpen, setIsOpen}) {
    return (
        <div className={`fixed bg-slate-900 text-white p-5 w-64 top-0 left-0 h-full border-r border-slate-700 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 transition-transform duration-300 z-50`}>
            <button className="md:hidden text-xl mb-6" onClick={() => setIsOpen(false)}>×</button>
            <h2 className="text-2xl font-bold mb-8">Finance Tracker</h2>
            <nav className="space-y-2">
                <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block px-4 py-2 rounded bg-slate-700 transition-all duration-200" : "block px-4 py-2 rounded hover:bg-gray-800 transition-all duration-200 hover:translate-x-1"}>
                    Dashboard
                </NavLink>
                <NavLink to="/transactions" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block px-4 py-2 rounded bg-slate-700 transition-all duration-200" : "block px-4 py-2 rounded hover:bg-gray-800 transition-all duration-200 hover:translate-x-1"}>
                    Transactions
                </NavLink>
                <NavLink to="/insights" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? "block px-4 py-2 rounded bg-slate-700 transition-all duration-200" : "block px-4 py-2 rounded hover:bg-gray-800 transition-all duration-200 hover:translate-x-1"}>
                    Insights
                </NavLink>
            </nav>
        </div>
    );
}
