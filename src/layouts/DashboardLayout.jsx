import { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

export default function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex">
      <Sidebar isOpen={sidebarOpen} />
      <div
        className={`flex-1 transition-all duration-300 ${
          sidebarOpen ? 'pl-64' : 'pl-0'
        }`}
      >
        <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        {children}
      </div>
    </div>
  );
}
