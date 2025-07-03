import { useAuth } from '../context/AuthContext';

export default function Profile() {
  const { user } = useAuth();
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl mt-10 p-6">
      <div className="flex items-center space-x-6">
        <img
          className="w-28 h-28 rounded-full object-cover ring-blue-500 ring-4"
          src="https://i.pravatar.cc/150?img=12"
          alt="User"
        />
        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            {user?.username || 'Guest User'}
          </h2>
          <p className="text-gray-500">admin@example.com</p>
          <div className="mt-4 flex gap-3">
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Edit Profile
            </button>
            <button className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 ">
              Change Password
            </button>
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-6">
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
          Account Details
        </h3>
        <div className="space-y-2 text-gray-600">
          <div>
            <strong>Username:</strong> Admin
          </div>
          <div>
            <strong>Email:</strong> admin@example.com
          </div>
          <div>
            <strong>Role:</strong> Adminitrator
          </div>
        </div>
      </div>
    </div>
  );
}
