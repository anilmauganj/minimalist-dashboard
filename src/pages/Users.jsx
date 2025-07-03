import { useState } from 'react';

import { FaEdit, FaPlus, FaTrash } from 'react-icons/fa';

const initialUsers = [
  { id: 1, name: 'Anil Kumar', email: 'anil@example.com', status: 'Active' },
  { id: 2, name: 'Ravi Singh', email: 'ravi@example.com', status: 'Inactive' },
];

export default function Users() {
  const [users, setUsers] = useState(initialUsers);
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    status: 'Active',
  });

  //Open Model to Add
  const openAddModel = () => {
    setEditingUser(null);
    setFormData({ name: '', email: '', status: '', status: '' });
    setIsModelOpen(true);
  };

  //Open Model to Edit
  const openEditModel = (user) => {
    setEditingUser(user);
    setFormData(user);
    setIsModelOpen(true);
  };

  //Add Update User
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      setUsers(users.map((u) => (u.id === editingUser.id ? formData : u)));
    } else {
      const newUser = { ...formData, id: Date.now() };
      setUsers([...users, newUser]);
    }
    setIsModelOpen(false);
  };

  // Delete User
  const handleDelete = (userId) => {
    const confirmed = window.confirm('Are you sure to delete this user?');
    if (confirmed) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  return (
    <div className="p-6 dark:bg-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold mb-4 dark:text-white ">
          User Management
        </h2>
        <button
          onClick={openAddModel}
          className="bg-blue-400 text-white px-4 py-2 rounded"
        >
          <FaPlus className="inline mr-2" />
          Add User
        </button>
      </div>

      <table className="w-full bg-white shadow-md rounded-md overflow-hidden">
        <thead className="bg-gray-300">
          <tr>
            <th className="text-left p-3">#</th>
            <th className="text-left p-3">Name</th>
            <th className="text-left p-3">Email</th>
            <th className="text-left p-3">Status</th>
            <th className="text-left p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center text-gray-500 py-4">
                No users to display
              </td>
            </tr>
          ) : (
            users.map((user, index) => (
              <tr key={user.id} className="border-t">
                <td className="p-3">{index + 1}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 text-xs rounded font-semibold ${
                      user.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-3 space-x-2">
                  <button
                    onClick={() => openEditModel(user)}
                    className="text-blue-600"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="text-red-600"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* Open Model for Add or Edit */}
      {isModelOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded shadow-md  p-6">
            <h3 className="text-lg font-semibold mb-4">
              {editingUser ? 'Edit User' : 'Add User'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                required
                className="w-full border px-3 py-2 rounded"
              />

              <input
                type="email"
                placeholder="Enter email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="w-full border px-3 py-2 rounded"
              />

              <select
                value={formData.status}
                onChange={(e) =>
                  setFormData({ ...formData, status: e.target.value })
                }
                className="w-full border px-3 py-2 rounded"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsModelOpen(false)}
                  type="button"
                  className="bg-gray-300 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-blue-300 px-4 py-2 rounded">
                  {editingUser ? 'Update User' : 'Add User'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
