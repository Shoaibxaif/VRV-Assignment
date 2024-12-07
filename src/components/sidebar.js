// components/Sidebar.jsx
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col">
      {/* vRv Dashboard with Home link and bottom border */}
      <div className="flex items-center justify-center h-16 bg-gray-800 border-b border-gray-600">
        <NavLink to="/" className="text-xl font-bold">
          vRv Dashboard
        </NavLink>
      </div>

      {/* Sidebar Navigation */}
      <nav className="flex flex-col mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-4 py-3 text-sm font-medium hover:bg-gray-700 transition ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/users"
          className={({ isActive }) =>
            `px-4 py-3 text-sm font-medium hover:bg-gray-700 transition ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          User Management
        </NavLink>
        <NavLink
          to="/roles"
          className={({ isActive }) =>
            `px-4 py-3 text-sm font-medium hover:bg-gray-700 transition ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          Role Management
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `px-4 py-3 text-sm font-medium hover:bg-gray-700 transition ${
              isActive ? "bg-gray-700" : ""
            }`
          }
        >
          Profile
        </NavLink>
      </nav>

     

      {/* Logout Button */}
      <div className="mt-auto px-4 py-3">
        <button className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
          Logout
        </button>
      </div>
      {/* Footer Section */}
      <footer className="bg-gray-800 py-2 text-center">
        <p className="text-gray-400">&copy; 2024 vRv Dashboard.</p>
      </footer>
    </div>
  );
};

export default Sidebar;
