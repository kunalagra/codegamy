// pages/index.js

'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    college: '',
    city: '',
    country: '',
    phone: '',
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleChange = (event) => {
    console.log("Handle change called");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    setSuccess(null);

    try {
        const response = await axios.post('/api/profileUpdate', formData);
        setSuccess('Form data submitted successfully!');
        console.log("Response after form submission:", response);
    } catch (error) {
        if (error.response) {
            console.error("Server responded with error:", error.response.data);
            setError(error.response.data.message || 'An error occurred.');
        } else if (error.request) {
            console.error("No response received:", error.request);
            setError('No response received from the server.');
        } else {
            console.error("Request setup error:", error.message);
            setError('Error setting up the request.');
        }
    } finally {
        setIsLoading(false);
        setFormData({
            name: '',
            age: '',
            gender: '',
            college: '',
            city: '',
            country: '',
            phone: '',
        });
    }
};

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-gray-700 font-medium">
          Name:
        </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="age" className="text-gray-700 font-medium">
          Age:
        </label>
        <input
          type="number"
          name="age"
          id="age"
          value={formData.age}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="gender" className="text-gray-700 font-medium">
          Gender:
        </label>
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="college" className="text-gray-700 font-medium">
          College:
        </label>
        <input
          type="text"
          name="college"
          id="college"
          value={formData.college}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="city" className="text-gray-700 font-medium">
          City:
        </label>
        <input
          type="text"
          name="city"
          id="city"
          value={formData.city}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="country" className="text-gray-700 font-medium">
          Country:
        </label>
        <input
          type="text"
          name="country"
          id="country"
          value={formData.country}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="text-gray-700 font-medium">
          Phone:
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        disabled={isLoading}
        onClick={handleSubmit}
      >
        Submit
      </button>
      <Link href ="/profile" ><u>Return to Profile</u></Link>
    </form>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md"> {/* Adjust max-w-lg and w-full */}
        <h1 className="text-2xl font-bold mb-4">Edit profile</h1>
        <Form />
      </div>
    </div>
  );
}