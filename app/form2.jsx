"use client"
import React, { useState } from 'react';


function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    const data = new FormData();
    data.append('fullName', formData.fullName);
    data.append('email', formData.email);
    data.append('phoneNumber', formData.phoneNumber);
   // your URL.

    const Sheet_Url =
      ""
    try {
      await fetch(Sheet_Url, {
        method: 'POST',
        body: data,
        muteHttpExceptions: true,
      });

      setFormData({
        fullNameame: '',
        email: '',
        phoneNumber: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`text-purple-700`}>
      <header className="App-header">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="fullName">Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </header>
    </div>
  );
}

export default Contact