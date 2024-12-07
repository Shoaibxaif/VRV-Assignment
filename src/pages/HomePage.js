import React from "react";
import { Link } from "react-router-dom";
import { FaUserAlt, FaShieldAlt, FaUserCog, FaChartBar } from "react-icons/fa"; // Using react-icons for visuals

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header Section */}
      <header className="text-center py-10">
        <h1 className="text-4xl font-extrabold text-blue-500">Welcome to vRv Dashboard</h1>
        <p className="text-lg mt-4 text-gray-400">
          Your all-in-one solution for managing users, roles, and profiles with ease.
        </p>
      </header>

      {/* Main Content */}
      <main className="px-6 md:px-12 lg:px-24 py-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* User Management */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 h-full flex flex-col justify-between">
          <FaUserAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2">User Management</h2>
          <p className="text-gray-400 mb-4 flex-grow">
            Add, edit, or delete users and manage their activity across the system.
          </p>
          <Link to="/users" className="bg-blue-500 py-2 px-4 rounded text-white hover:bg-blue-600 transition mt-auto">
            Go to Users
          </Link>
        </div>

        {/* Role Management */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 h-full flex flex-col justify-between">
          <FaShieldAlt className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2">Role Management</h2>
          <p className="text-gray-400 mb-4 flex-grow">
            Assign roles and permissions to users for fine-grained access control.
          </p>
          <Link to="/roles" className="bg-blue-500 py-2 px-4 rounded text-white hover:bg-blue-600 transition mt-auto">
            Go to Roles
          </Link>
        </div>

        {/* Profile Management */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 h-full flex flex-col justify-between">
          <FaUserCog className="text-4xl text-blue-500 mb-4 mx-auto" />
          <h2 className="text-2xl font-bold mb-2">Profile Management</h2>
          <p className="text-gray-400 mb-4 flex-grow">
            View and manage your profile settings and personal preferences.
          </p>
          <Link to="/profile" className="bg-blue-500 py-2 px-4 rounded text-white hover:bg-blue-600 transition mt-auto">
            Go to Profile
          </Link>
        </div>

        {/* Dashboard Stats Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105 col-span-1 lg:col-span-3 h-full flex flex-col justify-between">
          <div className="mb-6">
            <FaChartBar className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h2 className="text-2xl font-bold text-white">Dashboard Stats</h2>
            <p className="text-gray-400">Keep track of system activity, number of users, roles, and other insights.</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Users Stat */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="flex items-center mb-2">
                <FaUserAlt className="text-3xl text-blue-500 mr-3" />
                <h3 className="text-xl text-white">Users</h3>
              </div>
              <div className="text-2xl font-bold text-white">150</div>
              <div className="text-gray-400 text-sm">Total users in the system</div>
              <div className="mt-3 bg-gray-500 h-2 rounded-full">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: "75%" }}></div>
              </div>
            </div>

            {/* Roles Stat */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="flex items-center mb-2">
                <FaShieldAlt className="text-3xl text-blue-500 mr-3" />
                <h3 className="text-xl text-white">Roles</h3>
              </div>
              <div className="text-2xl font-bold text-white">5</div>
              <div className="text-gray-400 text-sm">Different roles defined in the system</div>
              <div className="mt-3 bg-gray-500 h-2 rounded-full">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: "90%" }}></div>
              </div>
            </div>

            {/* Active Sessions Stat */}
            <div className="bg-gray-700 p-4 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <div className="flex items-center mb-2">
                <FaUserCog className="text-3xl text-blue-500 mr-3" />
                <h3 className="text-xl text-white">Active Sessions</h3>
              </div>
              <div className="text-2xl font-bold text-white">30</div>
              <div className="text-gray-400 text-sm">Active user sessions</div>
              <div className="mt-3 bg-gray-500 h-2 rounded-full">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "60%" }}></div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default HomePage;
