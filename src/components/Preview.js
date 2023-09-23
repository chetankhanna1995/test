import React from "react";

const Preview = ({ formData, prevStep, submitForm }) => {
  const handlePrev = () => {
    prevStep();
  };

  const handleSubmit = () => {
    if (formData.firstName.length === 0) {
      alert("first name missing");
    } else if (formData.lastName.length === 0) {
      alert("last name is missing");
    } else if (formData.email.length === 0) {
      alert("email is missing");
    } else alert("form submit succesfully");
  };

  return (
    <div>
      <h2>Preview</h2>
      <p>
        <strong>Name:</strong> {formData.firstName} {formData.lastName}
      </p>
      <p>
        <strong>Email:</strong> {formData.email}
      </p>
      <p>
        <strong>Contact Number:</strong> {formData.contactNumber}
      </p>
      <p>
        <strong>Gender:</strong> {formData.gender}
      </p>
      <p>
        <strong>Interests:</strong> {formData.interests.join(", ")}
      </p>
      <p>
        <strong>Location:</strong> {formData.location}
      </p>
      <p>
        <strong>About:</strong> {formData.about}
      </p>
      <button onClick={handlePrev}>Previous</button>
      <button onClick={handleSubmit}>Sumbit</button>
    </div>
  );
};

export default Preview;
