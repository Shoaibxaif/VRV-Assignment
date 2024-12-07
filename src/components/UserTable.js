import React from "react";

const UserTable = ({ users, onEdit, onDelete, onToggleStatus }) => {
  const handleDelete = (userId) => {
    onDelete(userId); // Call the delete handler
  };

  const handleStatusToggle = (userId) => {
    onToggleStatus(userId); // Call the status toggle handler
  };

  return (
    <div>
      <table className="table-auto w-full mt-6 bg-gray-700 rounded-t-md shadow-md text-center">
        <thead className="bg-gray-600 text-gray-100">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="5" className="px-4 py-8 text-center text-gray-400">
                No users found. Please add a user.
              </td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id} className="border-t border-gray-600">
                <td className="px-4 py-2">{user.name}</td>
                <td className="px-4 py-2">{user.email}</td>
                <td className="px-4 py-2">{user.role}</td>
                <td className="px-4 py-2">
                  <button
                    className={`py-1 px-3 rounded ${
                      user.isActive ? "bg-green-500 text-white" : "bg-gray-500 text-white"
                    }`}
                    onClick={() => handleStatusToggle(user.id)}
                  >
                    {user.isActive ? "Active" : "Inactive"}
                  </button>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                    onClick={() => onEdit(user)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
