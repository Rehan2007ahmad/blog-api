import React, { useEffect, useState } from "react";
import AdminSideBar from "../AdminComponents/AdminSideBar";
import AdminHeader from "../AdminComponents/AdminHeader";
import { FaEdit, FaTrash  } from "react-icons/fa";
import axios from 'axios'

const AdminUsers = () => {
  const [user, setUser] = useState([])  
  const [selectedRole, setSelectedRole] = useState("Editor");
  const [filterRole, setFilterRole] = useState("All Roles");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const roles = ["Admin", "Editor", "User"];
  const filterOptions = ["All Roles", "Admin", "Editor", "User"];

  const users = [
    {
      id: 1,
      name: "Emily Thompson",
      email: "emily.thompson@example.com",
      role: "admin",
      status: "active",
      initials: "ET",
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@example.com",
      role: "editor",
      status: "active",
      initials: "MC",
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      role: "user",
      status: "inactive",
      initials: "SJ",
    },
    {
      id: 4,
      name: "David Rodriguez",
      email: "david.rodriguez@example.com",
      role: "editor",
      status: "active",
      initials: "DR",
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchUsers = async ()=>{
    const res = await axios.get('http://localhost:3000/api/user')
    setUser(res.data.users)
  }
  useEffect(()=>{
    fetchUsers()
  },[])


  const getInitialsColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-600";
      case "editor":
        return "bg-blue-100 text-blue-600";
      case "user":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case "admin":
        return "bg-purple-100 text-purple-700";
      case "editor":
        return "bg-blue-100 text-blue-700";
      case "user":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <AdminSideBar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 overflow-y-auto">
          <div className="p-6">
            <h1 className="text-2xl font-bold mb-6">Users</h1>
            <div className="bg-white rounded-lg shadow mb-6 p-6">
              <h2 className="text-lg font-semibold mb-4">Add New User</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors text-sm"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors text-sm"
                  />
                </div>
                <div className="relative">
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none appearance-none bg-white cursor-pointer text-sm"
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>
                        {role}
                      </option>
                    ))}
                  </select>
                  <i className="fas fa-chevron-down absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors text-sm"
                  />
                </div>
              </div>
              <button className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium !rounded-button whitespace-nowrap cursor-pointer">
                Add User
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow overflow-y-auto px-2 md:px-6">
              <div className="py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">All Users</h2>
              </div>
              <div className="w-full max-w-full overflow-x-auto">
                <table className="min-w-full w-full table-auto ">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-4 px-2 font-medium text-gray-700">User</th>
                      <th className="text-left py-4 px-2 font-medium text-gray-700">Email</th>
                      <th className="text-left py-4 px-2 font-medium text-gray-700">Role</th>
                      <th className="text-left py-4 px-2 font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((user,i) => (
                      <tr key={user._id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-2">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-medium text-sm ${getInitialsColor(user.role)}`}>
                              {user.firstName.slice(0,2).toUpperCase()}
                            </div>
                            <span className="font-medium text-gray-900">{user.firstName}</span>
                          </div>
                        </td>
                        <td className="py-4 px-2 text-gray-600">{user.email}</td>
                        <td className="py-4 px-2">
                          <span className={`px-3 py-1 rounded-full text-[15px] capitalize font-medium ${getRoleBadgeColor(user.role)}`}>{user.role}</span>
                        </td>

                        <td className="py-4 px-2">
                          <div className="flex items-center space-x-3">
                            <button className="text-gray-400 hover:text-indigo-600 transition-colors cursor-pointer">
                              <FaEdit className=""/>
                            </button>
                            <button className="text-gray-400 hover:text-red-600 transition-colors cursor-pointer">
                              <FaTrash  className=""/>
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminUsers;
