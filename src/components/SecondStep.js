import React from "react";

const SecondStep = ({
  nextStep,
  prevStep,
  handleChange,
  gender,
  interests,
  location,
  about,
}) => {
  const handleNext = () => {
    // Add validation logic here
    nextStep();
  };

  const handlePrev = () => {
    prevStep();
  };

  const calculateWordCount = () => {
    const words = about.length;
    return words;
  };

  return (
    <div className="formstepssecond">
      <h2>Step 2: Additional Information</h2>
      <label>
        Gender:
        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => handleChange("gender", e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => handleChange("gender", e.target.value)}
        />{" "}
        Female
      </label>
      Interests:&nbsp; Minimum 2 selection required<br></br>
      <label>
        <input
          type="checkbox"
          value="Reading Books"
          checked={interests.includes("Reading Books")}
          onChange={(e) =>
            handleChange("interests", [...interests, "Reading Books"])
          }
        />{" "}
        Reading Books
      </label>
      <label>
        <input
          type="checkbox"
          value="Watching Movies"
          checked={interests.includes("Watching Movies")}
          onChange={(e) =>
            handleChange("interests", [...interests, "Watching Movies"])
          }
        />{" "}
        Watching Movies
      </label>
      <label>
        <input
          type="checkbox"
          value="Others"
          checked={interests.includes("Others")}
          onChange={(e) => handleChange("interests", [...interests, "Others"])}
        />{" "}
        Others
      </label>
      <label>
        Location: &nbsp;
        <select
          value={location}
          onChange={(e) => handleChange("location", e.target.value)}
        >
          <option value="" disabled>
            Select Location
          </option>
          <option value="Delhi">Delhi</option>
          <option value="Gurgoan">Gurgoan</option>
          <option value="Noida">Noida</option>
        </select>
      </label>
      <label>
        About (max 100 characters): <br></br>
        <textarea
          id="textarea"
          value={about}
          onChange={(e) => handleChange("about", e.target.value)}
          maxLength={100}
        ></textarea>
        {calculateWordCount()}
      </label>
      <div id="stepbuttons">
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default SecondStep;
