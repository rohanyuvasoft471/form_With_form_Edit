import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index2.css';

export default function FormPart2() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '', 
    hobbies: [],
    status: '', 
    description: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "hobbies") {
      setFormData(prev => ({
        ...prev,
        hobbies: checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter(h => h !== value)
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
      alert(errors.firstName);
    }else if (!data.lastName.trim()) {errors.lastName = 'Last Name is required'
      alert(errors.lastName);
    }
    else if (!data.email.trim()) {
      {errors.email = 'Email is required';}
      alert(errors.email);
    }
    else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Invalid email format'
      alert(errors.email)
    }
    else if (!data.gender) {
      errors.gender = 'Gender is required'
      alert(errors.gender);
    }
    else if (data.hobbies.length === 0){
        errors.hobbies = 'Select at least one hobby';
        alert(errors.hobbies)
      }
    else if (!data.status) {
      errors.status = 'Status is required'
      alert(errors.status);
    }
    else if (!data.description.trim()){ 
      errors.description = 'Description is required'
      alert(errors.description)
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updatedUsers = [...users, formData];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      navigate('/table');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
        <br />

        <label>Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
        <br />

        <label>Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
        <br />

        <label>Gender</label>
        <div className="option-group">
          <label><input type="radio" name="gender" value="MALE" checked={formData.gender === "MALE"} onChange={handleChange} />Male</label>
          <label><input type="radio" name="gender" value="FEMALE" checked={formData.gender === "FEMALE"} onChange={handleChange} />Female</label>
        </div>
        {errors.gender && <p className="error">{errors.gender}</p>}

        <label>Hobbies</label>
        <div className="option-group">
          {["Cricket", "Badminton", "Chess", "Reading"].map((hobby) => (
            <label key={hobby}><input type="checkbox" name="hobbies" value={hobby} checked={formData.hobbies.includes(hobby)} onChange={handleChange} />{hobby}</label>
          ))}
        </div>
        {errors.hobbies && <p className="error">{errors.hobbies}</p>}

        <label>Status</label>
        <select name="status" value={formData.status} onChange={handleChange}>
          <option value="">Select</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
        {errors.status && <p className="error">{errors.status}</p>}
        <br />

        <label>Description</label>
        <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        {errors.description && <p className="error">{errors.description}</p>}
        <br />

        <button type="submit">Save</button>
      </form>

  );
}
