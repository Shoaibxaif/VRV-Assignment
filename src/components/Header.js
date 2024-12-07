// components/Header.jsx
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  // Determine the page title based on the current path
  const pageTitles = {
    "/users": "User Management",
    "/roles": "Role Management",
  };

  const currentPage = pageTitles[location.pathname] || "Dashboard";

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">{currentPage}</h2>
      <div className="flex items-center space-x-4">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
          Profile
        </button>
        <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
