import React, { useState, useEffect } from "react";
import './index.css';

export default function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    gender: '',
    hobbies: [],
    status: '',
    description: ''
  });

  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem("users");
    return savedUsers ? JSON.parse(savedUsers) : [];
  });

  const [errors, setErrors] = useState({});
  const [editIndex, setEditIndex] = useState(null); 

  useEffect(() => {
    const lastSubmitted = localStorage.getItem("lastFormData");
    if (lastSubmitted) {
      setFormData(JSON.parse(lastSubmitted));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox" && name === "hobbies") {
      setFormData((prev) => {
        const newHobbies = checked
          ? [...prev.hobbies, value]
          : prev.hobbies.filter((hobby) => hobby !== value);
        return { ...prev, hobbies: newHobbies };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.firstName.trim()) {
      errors.firstName = 'First Name is required';
      alert(errors.firstName);
    }else if (!data.lastName.trim()) {errors.lastName = 'Last Name is required'}
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
// Edit if else
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      let updatedUsers = [...users];

      if (editIndex !== null) {
        updatedUsers[editIndex] = formData;
        setEditIndex(null);
      } else {
        updatedUsers.push(formData);
      }

      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      localStorage.setItem("lastFormData", JSON.stringify(formData));

      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        gender: '',
        hobbies: [],
        status: '',
        description: ''
      });
      if (editIndex !== null){
      alert("Form updated successfully!");
      }else{
        alert("Form submitted successfully!")
      }
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const handleEdit = (index) => {
    setFormData(users[index]);
    setEditIndex(index);
  };

  const handleCancelEdit = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      gender: '',
      hobbies: [],
      status: '',
      description: ''
    });
    setEditIndex(null);
  };

  const deleteUser = (index) => {
  const updatedUsers = [
    ...users.slice(0, index), ...users.slice(index + 1)
  ];
  setUsers(updatedUsers);
  localStorage.setItem("users", JSON.stringify(updatedUsers));
};

  return (
    <div style={{ textAlign: 'center' }}>
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
          {["MALE", "FEMALE"].map((g) => (
            <label className="radio" key={g}>
              <input type="radio" name="gender" value={g} checked={formData.gender === g} onChange={handleChange} />
              {g.charAt(0) + g.slice(1).toLowerCase()}
            </label>
          ))}
        </div>
        {errors.gender && <p className="error">{errors.gender}</p>}

        <label>Hobbies</label>
        <div className="option-group">
          {["Cricket", "Badminton", "Chess", "Reading"].map((hobby) => (
            <label className="checkbox" key={hobby}>
              <input
                type="checkbox"
                name="hobbies"
                value={hobby}
                checked={formData.hobbies.includes(hobby)}
                onChange={handleChange}
              />
              {hobby}
            </label>
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
        <br/>

        <button type="submit">{editIndex !== null ? "Update" : "Save"}</button>
        {editIndex !== null && (
          <button type="button" onClick={handleCancelEdit} style={{ marginLeft: "10px" }}>Cancel</button>
        )}
      </form>

      <h2>User List</h2>
      {users.length > 0 ? (
        <table border="1" style={{ margin: "auto" }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Hobbies</th>
              <th>Status</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>{user.hobbies.join(", ")}</td>
                <td>{user.status}</td>
                <td>{user.description}</td>
                <td>
                  {(() => {
                    if (editIndex === index) {
                      return <button onClick={handleCancelEdit}>Cancel</button>;
                      } else {
                          return (
                            <>
                            <button onClick={() => handleEdit(index)}>Edit</button>
                            <button onClick={() => deleteUser(index)}>Delete</button>
                            </>
                          );
                      }
                    })()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No users added yet.</p>
      )}
    </div>
  );
}
