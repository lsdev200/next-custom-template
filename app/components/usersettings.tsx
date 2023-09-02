"use client";

// components/UserSettings.tsx
import React, { useState } from "react";

interface UserSettingsProps {
  user: {
    id: number;
    name: string;
    email: string;
    bio: string;
  };
  onSave: (user: { name: string; email: string; bio: string }) => void;
}

const UserSettings: React.FC<UserSettingsProps> = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    bio: user.bio,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    bio: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    // Validation logic (in this example, simple checks for empty fields)
    const newErrors = {
      name: formData.name.trim() === "" ? "Name is required" : "",
      email: formData.email.trim() === "" ? "Email is required" : "",
      bio: formData.bio.trim() === "" ? "Bio is required" : "",
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).every((error) => error === "")) {
      onSave(formData);
    }
  };

  return (
    <div className="w-96">
      <h2 className="text-xl font-semibold mb-4">User Settings</h2>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="mb-4">
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="bg-gray-200 p-2 rounded w-full focus:outline-none"
          />
          <p className="text-red-500 mt-1">{errors.name}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="bg-gray-200 p-2 rounded w-full focus:outline-none"
          />
          <p className="text-red-500 mt-1">{errors.email}</p>
        </div>
        <div className="mb-4">
          <label className="block font-semibold">Bio</label>
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            className="bg-gray-200 p-2 rounded w-full h-24 focus:outline-none"
          />
          <p className="text-red-500 mt-1">{errors.bio}</p>
        </div>
        <div>
          <button
            onClick={handleSave}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSettings;
