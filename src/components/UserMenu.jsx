import { useState, useRef, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function UserMenu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const { logout } = useAuth();
  const navigate = useNavigate();

  //Click outside or click menu then hide menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="relative " ref={menuRef}>
      <FaUserCircle
        onClick={() => setMenuOpen(!menuOpen)}
        className="text-3xl cursor-pointer text-gray-700 dark:tex-white"
      />
      {menuOpen && (
        <div className="absolute right-0 w-36 bg-white shadow-md rounded-md mt-2 p-2 z-50 text-sm text-gray-700">
          <Link
            to="/profile"
            className="block py-2 px-3 hover:bg-gray-100 rounded"
          >
            Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 hover:bg-gray-100 rounded"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}
