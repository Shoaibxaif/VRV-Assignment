import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify"; 
import "react-toastify/dist/ReactToastify.css"; 

const Profile = () => {
  // Initialize state with default values or values from localStorage
  const [profile, setProfile] = useState({
    name: localStorage.getItem("profileName") || "Admin Name",
    email: localStorage.getItem("profileEmail") || "admin@example.com",
    role: localStorage.getItem("profileRole") || "Administrator",
    joined: localStorage.getItem("profileJoined") || "Jan 1, 2023",
  });

  const [isEditing, setIsEditing] = useState(false); // Track editing state

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  // Save changes to localStorage and exit editing mode
  const handleSave = () => {
    localStorage.setItem("profileName", profile.name);
    localStorage.setItem("profileEmail", profile.email);
    localStorage.setItem("profileRole", profile.role);
    localStorage.setItem("profileJoined", profile.joined);

    setIsEditing(false);
    toast.success("Profile updated successfully!"); // Show success toast
  };

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Profile container */}
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="bg-gray-800 p-6 rounded shadow-md w-full max-w-2xl">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div>
              {isEditing ? (
                <>
                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    className="border rounded p-2 w-full bg-gray-700 text-white"
                    placeholder="Name"
                  />
                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    onChange={handleChange}
                    className="border rounded p-2 w-full mt-2 bg-gray-700 text-white"
                    placeholder="Email"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-100">{profile.name}</h2>
                  <p className="text-gray-400">{profile.email}</p>
                </>
              )}
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-100">Account Details</h3>
            <ul className="mt-2 space-y-2">
              <li className="flex justify-between">
                <span className="text-gray-400">Role:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="role"
                    value={profile.role}
                    onChange={handleChange}
                    className="border rounded p-2 w-2/3 bg-gray-700 text-white"
                    placeholder="Role"
                  />
                ) : (
                  <span className="text-gray-100 font-medium">{profile.role}</span>
                )}
              </li>
              <li className="flex justify-between">
                <span className="text-gray-400">Joined:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="joined"
                    value={profile.joined}
                    onChange={handleChange}
                    className="border rounded p-2 w-2/3 bg-gray-700 text-white"
                    placeholder="Join Date"
                  />
                ) : (
                  <span className="text-gray-100 font-medium">{profile.joined}</span>
                )}
              </li>
            </ul>
          </div>
          <div className="mt-6 text-right">
            {isEditing ? (
              <button
                className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition"
                onClick={handleSave}
              >
                Save
              </button>
            ) : (
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

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

export default Profile;
