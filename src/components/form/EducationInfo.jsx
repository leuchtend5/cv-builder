import { useState } from 'react';

function RenderForm({ handleOnSubmit, handleInputChange }) {
  return (
    <>
      <form id="form-education" onSubmit={handleOnSubmit}>
        <div className="input-container">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            onChange={handleInputChange}
            placeholder="Enter your degree"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="school">School/University</label>
          <input
            type="text"
            id="school"
            name="school"
            onChange={handleInputChange}
            placeholder="Enter your University name"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleInputChange}
            placeholder="Enter your University location"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="start-date">Start Date</label>
          <input
            type="date"
            id="start-date"
            name="startDate"
            onChange={handleInputChange}
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="end-date">End Date</label>
          <input
            type="date"
            id="end-date"
            name="endDate"
            onChange={handleInputChange}
            required
          ></input>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default function EducationInfo({ handleDataValue }) {
  const [input, setInput] = useState({
    degree: '',
    school: '',
    location: '',
    startDate: null,
    endDate: null,
  });
  const [isExpand, setIsExpand] = useState(false);

  function handleToggleExpand() {
    setIsExpand((prevValue) => !prevValue);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    handleDataValue(input);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  }

  return (
    <div>
      <div>
        <h2>Education</h2>
        <span
          className={`chevron ${isExpand ? 'expanded' : 'collapsed'}`}
          onClick={handleToggleExpand}
        >
          <i className="fa-solid fa-chevron-down"></i>
        </span>
      </div>
      {isExpand ? (
        <RenderForm handleOnSubmit={handleOnSubmit} handleInputChange={handleInputChange} />
      ) : null}
    </div>
  );
}
