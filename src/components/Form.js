import React, { useState } from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import Preview from "./Preview";

const Form = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    gender: "",
    interests: [],
    location: "",
    about: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const {
    firstName,
    lastName,
    email,
    contactNumber,
    gender,
    interests,
    location,
    about,
  } = formData;

  return (
    <div>
      {step === 1 && (
        <FirstStep
          nextStep={nextStep}
          handleChange={handleChange}
          firstName={firstName}
          lastName={lastName}
          email={email}
          contactNumber={contactNumber}
        />
      )}
      {step === 2 && (
        <SecondStep
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          gender={gender}
          interests={interests}
          location={location}
          about={about}
        />
      )}
      {step === 3 && <Preview formData={formData} prevStep={prevStep} />}
    </div>
  );
};

export default Form;
