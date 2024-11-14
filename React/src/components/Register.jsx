import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Vite from "../assets/vite.png";
import ReactPic from "../assets/react.png";
import SB from "../assets/spring-boot.png";
import MySQL from "../assets/mysql.png";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    education: "",
    email: "",
    phone_no: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      await axios.post("http://localhost:8080/api/register", formData);
      navigate("/success");
    } catch (error) {
      console.error("Error registering user:", error);
      navigate("/failure");
    }
  };

  return (
    <>
      <div className="topFlex">
        <img src={Vite} className="vite" alt="Vite Logo" />
        <img src={ReactPic} className="react" alt="React Logo" />
      </div>
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          <input
            name="education"
            placeholder="Education Qualification"
            value={formData.education}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            name="phone_no"
            placeholder="Phone Number"
            value={formData.phone_no}
            onChange={handleChange}
            required
          />
          <textarea
            name="address"
            placeholder="Address"
            value={formData.address}
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-button">
            Register
          </button>
        </form>
      </div>
      <div className="downFlex">
        <img src={SB} className="sb" alt="Spring Boot Logo" />
        <img src={MySQL} className="mysql" alt="MySQL Logo" />
      </div>
    </>
  );
};

export default Register;
