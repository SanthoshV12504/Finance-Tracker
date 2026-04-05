import Sidebar from "./layout/sidebar";
import Header from "./layout/header";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Insights from "./pages/Insights";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [role, setRole] = useState("user");
  useEffect(() => {
  if (darkMode) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}, [darkMode]);
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-slate-950 text-gray-900 dark:text-white transition-colors duration-300">
      {isOpen && (<div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setIsOpen(false)}></div>)}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="flex-1 bg-gray-100 dark:bg-gray-900 min-h-screen md:ml-64 transition-colors duration-300">
        <Header setIsOpen={setIsOpen} role={role} setRole={setRole} darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="p-8 space-y-8">
          <Routes>
            <Route path="/" element={<Dashboard darkMode={darkMode}/>} />
            <Route path="/transactions" element={<Transactions role={role} />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;