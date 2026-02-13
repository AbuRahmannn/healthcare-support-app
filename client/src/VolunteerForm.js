import React, { useState } from "react";
import API from "./api";

function VolunteerForm() {
  const [form, setForm] = useState({
    name: "",
    skill: "",
    availability: "",
    location: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/volunteer", form);
    alert("Volunteer Registered!");
    setForm({ name: "", skill: "", availability: "", location: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Volunteer Registration</h2>
      <input placeholder="Name" required
        value={form.name}
        onChange={(e) => setForm({...form, name: e.target.value})} />
      <input placeholder="Skill"
        value={form.skill}
        onChange={(e) => setForm({...form, skill: e.target.value})} />
      <input placeholder="Availability"
        value={form.availability}
        onChange={(e) => setForm({...form, availability: e.target.value})} />
      <input placeholder="Location"
        value={form.location}
        onChange={(e) => setForm({...form, location: e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
}

export default VolunteerForm;
