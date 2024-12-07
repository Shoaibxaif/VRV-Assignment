import React, { useState } from "react";
import PermissionAssignment from "./PermissionAssignment";
import { toast } from "react-toastify"; // Import toast for notifications

const RoleForm = ({ role, onSave, onCancel }) => {
  const [formData, setFormData] = useState(
    role || { name: "", permissions: [] }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePermissionsChange = (permissions) => {
    setFormData({ ...formData, permissions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    toast.success(`${role ? "Role updated" : "Role added"} successfully!`); // Toastify success message
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded shadow-md w-96">
        <h2 className="text-xl font-bold mb-4 text-white">
          {role ? "Edit Role" : "Add Role"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-400">Role Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded bg-gray-700 text-white"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400">Permissions</label>
            <PermissionAssignment
              selectedPermissions={formData.permissions}
              onChange={handlePermissionsChange}
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoleForm;
