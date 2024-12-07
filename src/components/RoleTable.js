import { toast } from "react-toastify"; // Import toast for notifications

const RoleTable = ({ roles, onEdit, onDelete }) => {
  const handleDelete = (id) => {
    onDelete(id); // Call the onDelete function passed as a prop
    toast.success("Role deleted successfully!"); // Show success toast on delete
  };

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full mt-6 bg-gray-800 text-white rounded text-center shadow">
        <thead className="bg-gray-700">
          <tr>
            <th className="px-4 py-2">Role Name</th>
            <th className="px-4 py-2">Permissions</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.length === 0 ? (
            <tr>
              <td colSpan="3" className="px-4 py-6 text-center text-gray-400">
                No roles available
              </td>
            </tr>
          ) : (
            roles.map((role) => (
              <tr key={role.id} className="border-t border-gray-600">
                <td className="px-4 py-2">{role.name}</td>
                <td className="px-4 py-2">{role.permissions.join(", ")}</td>
                <td className="px-4 py-2 space-x-2">
                  <button
                    className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-600"
                    onClick={() => onEdit(role)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                    onClick={() => handleDelete(role.id)} // Call handleDelete on click
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

export default RoleTable;
