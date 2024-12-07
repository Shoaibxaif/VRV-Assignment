import React, { useState } from "react";
import RoleTable from "../components/RoleTable";
import RoleForm from "../components/RoleForm";
import { ToastContainer } from "react-toastify"; // Import ToastContainer for notifications
import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

const RoleManagement = () => {
  const [roles, setRoles] = useState([
    { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
    { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  ]);
  const [selectedRole, setSelectedRole] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSaveRole = (role) => {
    if (role.id) {
      // Edit existing role
      setRoles(roles.map((r) => (r.id === role.id ? role : r)));
    } else {
      // Add new role
      setRoles([...roles, { ...role, id: Date.now() }]);
    }
    setIsFormOpen(false);
  };

  const handleDeleteRole = (id) => {
    setRoles(roles.filter((role) => role.id !== id));
  };

  return (
    <div className=" relative bg-gray-900 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Role Management</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        onClick={() => {
          setSelectedRole(null);
          setIsFormOpen(true);
        }}
      >
        Add Role
      </button>
      <RoleTable
        roles={roles}
        onEdit={(role) => {
          setSelectedRole(role);
          setIsFormOpen(true);
        }}
        onDelete={handleDeleteRole}
      />
      {isFormOpen && (
        <RoleForm
          role={selectedRole}
          onSave={handleSaveRole}
          onCancel={() => setIsFormOpen(false)}
        />
      )}

      {/* Toastify Container for notifications */}
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

export default RoleManagement;
