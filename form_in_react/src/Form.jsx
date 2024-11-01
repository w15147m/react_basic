import React, { useState } from "react";
import "./Form.css"; // Custom CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: " ",
  });
  let hadleChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let hendleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      email: "",
      message: "",
      name: "",  
    });
  };
  return (
    <div className="form-container">
      <form onSubmit={hendleSubmit}>
        <h2>Contact Us</h2>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            required
            onChange={hadleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            required
            onChange={hadleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            placeholder="Enter your message"
            required
            onChange={hadleChange}
          ></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
