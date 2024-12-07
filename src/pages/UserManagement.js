import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";  // Import toast and ToastContainer
import "react-toastify/dist/ReactToastify.css";  // Import the CSS for Toastify
import UserTable from "../components/UserTable";
import UserForm from "../components/UserForm";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  useEffect(() => {
    // Load users from localStorage
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(savedUsers);
  }, []);

  const handleSaveUser = (user) => {
    let updatedUsers;
    if (user.id) {
      // Edit existing user (correcting the user object)
      updatedUsers = users.map((u) => 
        u.id === user.id ? { ...u, ...user } : u // Correctly update the user with the same ID
      );
      toast.success("User updated successfully!"); // Show success toast
    } else {
      // Add new user
      updatedUsers = [...users, { ...user, id: Date.now() }]; // New user gets a unique ID
      toast.success("User added successfully!"); // Show success toast
    }

    setUsers(updatedUsers); // Update the state
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Save to localStorage
    setIsFormOpen(false); // Close the form
  };

  const handleDeleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Update localStorage

    toast.success("User deleted successfully!"); // Show success toast
  };

  const handleToggleStatus = (id) => {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, isActive: !user.isActive } : user
    );
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers)); // Update localStorage

    toast.success("User status updated!"); // Show success toast
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
        onClick={() => {
          setSelectedUser(null);
          setIsFormOpen(true);
        }}
      >
        Add User
      </button>
      <UserTable
        users={users}
        onEdit={(user) => {
          setSelectedUser(user);
          setIsFormOpen(true);
        }}
        onDelete={handleDeleteUser}
        onToggleStatus={handleToggleStatus}
      />
      {isFormOpen && (
        <UserForm
          user={selectedUser}
          onSave={handleSaveUser}
          onCancel={() => setIsFormOpen(false)}
        />
      )}

      {/* ToastContainer renders the toast messages */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default UserManagement;
