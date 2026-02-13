import React, { useState } from "react";
import API from "./api";

function SupportForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    type: "",
    description: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/support", form);
    alert("Support Request Submitted!");
    setForm({ name: "", phone: "", city: "", type: "", description: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Patient Support Form</h2>
      <input placeholder="Name" required
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})} />
      <input placeholder="Phone" required
        value={form.phone}
        onChange={(e) => setForm({...form, phone: e.target.value})} />
      <input placeholder="City"
        value={form.city}
        onChange={(e) => setForm({...form, city: e.target.value})} />
      <select required
        value={form.type}
        onChange={(e) => setForm({...form, type: e.target.value})}>
        <option value="">Select Support Type</option>
        <option value="Medicine">Medicine</option>
        <option value="Ambulance">Ambulance</option>
        <option value="Appointment">Appointment</option>
      </select>
      <textarea placeholder="Description"
        value={form.description}
        onChange={(e) => setForm({...form, description: e.target.value})} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SupportForm;
