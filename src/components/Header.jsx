import UserMenu from './UserMenu';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

export default function Header({ toggleSidebar }) {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <div className="flex justify-between items-center bg-white dark:bg-gray-900 shadow-md p-4">
      <div className="flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-800 dark:text-white"
        >
          ☰
        </button>
        <h1 className="text-xl font-semibold dark:text-white">Dashboard</h1>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-gray-600 dark:text-yellow-300"
          title="Toggle Theme"
        >
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <p className="text-sm text-gray-500 dark:text-white">Welcome, Admin</p>
        <UserMenu />
      </div>
    </div>
  );
}
