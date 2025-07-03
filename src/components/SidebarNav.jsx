import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaUser } from 'react-icons/fa';

export default function SidebarNav() {
  const linkClasses = ({ isActive }) =>
    `flex items-center gap-2 hover:text-gray-300 p-2 ${
      isActive ? 'bg-gray-900 font-semibold p-2 rounded-md' : ''
    }`;

  return (
    <nav className="space-y-4">
      <NavLink to="/" className={linkClasses}>
        <FaHome /> Dashboard
      </NavLink>

      <NavLink to="/users" className={linkClasses}>
        <FaUsers /> Users
      </NavLink>

      <NavLink to="/profile" className={linkClasses}>
        <FaUser /> Profile
      </NavLink>
    </nav>
  );
}
