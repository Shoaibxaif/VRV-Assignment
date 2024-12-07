// components/PermissionAssignment.jsx
const PermissionAssignment = ({ selectedPermissions, onChange }) => {
    const permissions = ["Read", "Write", "Delete"];
  
    const handleCheckboxChange = (permission) => {
      const updatedPermissions = selectedPermissions.includes(permission)
        ? selectedPermissions.filter((p) => p !== permission)
        : [...selectedPermissions, permission];
      onChange(updatedPermissions);
    };
  
    return (
      <div className="space-y-2">
        {permissions.map((permission) => (
          <label key={permission} className="flex items-center">
            <input
              type="checkbox"
              checked={selectedPermissions.includes(permission)}
              onChange={() => handleCheckboxChange(permission)}
            />
            <span className="ml-2">{permission}</span>
          </label>
        ))}
      </div>
    );
  };
  
  export default PermissionAssignment;
  