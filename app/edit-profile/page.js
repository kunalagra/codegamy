// pages/index.js

'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

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

  async function fetchUserInfo() {
    try {
      const response = await axios.get("/api/getUserInfo");
      const data = response.data;
      setFormData(data);
    } catch (error) {
      console.error("Error fetching user info:", error);
    }
  }

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleChange = (event) => {
    console.log("Handle change called");
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
        const response = await axios.post('/api/profileUpdate', formData);
        router.push('/profile');
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

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
      <input
        type="text"
        name="name"
        id="name"
        placeholder='Full Name'
        value={formData.name}
        onChange={handleChange}
        className="shadow-md p-4 bg-light-2 rounded-xl w-full"
        required
      />
      <div className="flex justify-between gap-3">
        <input
          type="number"
          name="age"
          id="age"
          placeholder='Age'
          value={formData.age}
          onChange={handleChange}
          className="shadow-md p-4 bg-light-2 rounded-xl w-full"
          required
        />
        <select
          name="gender"
          id="gender"
          value={formData.gender}
          onChange={handleChange}
          className="shadow-md p-4 bg-light-2 rounded-xl w-full"
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <input
        type="tel"
        name="phone"
        id="phone"
        placeholder='Phone'
        value={formData.phone}
        onChange={handleChange}
        className="shadow-md p-4 bg-light-2 rounded-xl w-full"
        required
      />
      <input
        type="text"
        name="college"
        id="college"
        placeholder='Institute Name'
        value={formData.college}
        onChange={handleChange}
        className="shadow-md p-4 bg-light-2 rounded-xl w-full"
        required
      />
      <input
        type="text"
        name="city"
        id="city"
        placeholder='City'
        value={formData.city}
        onChange={handleChange}
        className="shadow-md p-4 bg-light-2 rounded-xl w-full"
        required
      />
      <input
        type="text"
        name="country"
        id="country"
        placeholder='Country'
        value={formData.country}
        onChange={handleChange}
        className="shadow-md p-4 bg-light-2 rounded-xl w-full"
        required
      />

      {error && (
        <div className="text-center bg-red-500 py-2 px-6 text-white rounded-full cursor-pointer" onClick={() => setError(null)}>
          {error}
        </div>
      )}
      
      <button
        type="submit"
        className="mb-4 bg-dark-1 text-center text-white px-4 py-2 rounded-xl disabled:cursor-not-allowed"
        disabled={formData.age==='' || formData.city==='' || formData.college==='' || formData.country==='' || formData.gender==='' || formData.name==='' || formData.phone==='' || isLoading}
        onClick={handleSubmit}
      >
        {isLoading? (
          <img src="loader.svg" alt="loading" className="w-6 h-6 object-contain mx-auto" />
        ) : "Update"}
      </button>
      
    </form>
  );
};

export default function Home() {
  return (
    <div className="flex items-center justify-center mt-8 px-2">
      <div className="max-w-lg w-full">
        <Link href="/profile" className='text-gray-2'>⯇ Back</Link>
        <h1 className="text-2xl font-bold my-4">Update Profile</h1>
        <Form />
      </div>
    </div>
  );
}