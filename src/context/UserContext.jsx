import React, { createContext, useState, useContext, useEffect } from "react";
import { getAllUsers } from "../UserAPI";

const UserContext = createContext();

export const useUsers = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUsers must be used within a UserProvider");
  }
  return context;
};

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load initial users from API
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers();
      const apiUsers = response.data;

      // Load locally saved users from localStorage
      const savedUsers = JSON.parse(localStorage.getItem("localUsers") || "[]");

      // Combine API users with locally saved users
      // New users get IDs starting after the max API user ID
      const maxId =
        apiUsers.length > 0 ? Math.max(...apiUsers.map((u) => u.id)) : 0;
      const localUsersWithIds = savedUsers.map((user, index) => ({
        ...user,
        id: user.id || maxId + index + 1,
      }));

      setUsers([...apiUsers, ...localUsersWithIds]);
      setLoading(false);
    } catch (error) {
      console.error("Error loading users:", error);
      setLoading(false);
    }
  };

  const addUser = (userData) => {
    // Create new user object
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1,
      name: `${userData.firstName} ${userData.lastName}`,
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
      address: userData.address,
      dateOfBirth: userData.dateOfBirth,
      country: userData.country,
      createdAt: new Date().toISOString(),
    };

    // Add to state
    setUsers([newUser, ...users]);

    // Save to localStorage
    const savedUsers = JSON.parse(localStorage.getItem("localUsers") || "[]");
    savedUsers.unshift(newUser);
    localStorage.setItem("localUsers", JSON.stringify(savedUsers));

    return newUser;
  };

  const deleteUser = (userId) => {
    // Remove from state
    setUsers(users.filter((user) => user.id !== userId));

    // Remove from localStorage if it's a local user
    const savedUsers = JSON.parse(localStorage.getItem("localUsers") || "[]");
    const updatedSavedUsers = savedUsers.filter((user) => user.id !== userId);
    localStorage.setItem("localUsers", JSON.stringify(updatedSavedUsers));
  };

  const value = {
    users,
    loading,
    addUser,
    deleteUser,
    refreshUsers: loadUsers,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
