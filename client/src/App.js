import React from "react";
import SupportForm from "./SupportForm";
import VolunteerForm from "./VolunteerForm";
import Chatbot from "./Chatbot";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1>CareConnect - Healthcare Support</h1>
      <SupportForm />
      <VolunteerForm />
      <Chatbot />
    </div>
  );
}

export default App;
