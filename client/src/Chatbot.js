import React, { useState } from "react";

function Chatbot() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    const msg = message.toLowerCase();

    if (msg.includes("ambulance")) {
      setResponse("Please fill the support form and select Ambulance option.");
    } else if (msg.includes("medicine")) {
      setResponse("We provide free medicine support based on availability.");
    } else if (msg.includes("time")) {
      setResponse("Our team usually responds within 24 hours.");
    } else {
      setResponse("Please contact our support team for more information.");
    }
  };

  return (
    <div className="chatbot">
      <h3>FAQ Chatbot</h3>
      <input
        placeholder="Ask a question..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleAsk}>Ask</button>
      <p>{response}</p>
    </div>
  );
}

export default Chatbot;
