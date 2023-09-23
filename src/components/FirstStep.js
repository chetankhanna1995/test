import React from "react";

const FirstStep = ({
  nextStep,
  handleChange,
  firstName,
  lastName,
  email,
  contactNumber,
}) => {
  const handleNext = () => {
    // Add validation logic here
    nextStep();
  };

  return (
    <div className="formsteps">
      <h2>Step 1: Personal Information</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => handleChange("firstName", e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => handleChange("lastName", e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => handleChange("email", e.target.value)}
      />
      <input
        type="tel"
        placeholder="Contact Number"
        value={contactNumber}
        onChange={(e) => handleChange("contactNumber", e.target.value)}
      />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default FirstStep;
