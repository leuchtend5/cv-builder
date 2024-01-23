import { useState } from 'react';

function RenderForm({ handleOnSubmit, handleInputChange, data }) {
  const { degree, school, location, startDate, endDate } = data;
  return (
    <>
      <form id="form-education" onSubmit={handleOnSubmit}>
        <div className="input-container">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
            value={degree}
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
            value={school}
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
            value={location}
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
            value={startDate}
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
            value={endDate}
            onChange={handleInputChange}
            required
          ></input>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

function DisplayFormData({ data, handleEditForm }) {
  const { degree, school, location, startDate, endDate } = data;

  return (
    <>
      <p>{degree}</p>
      <p>{school}</p>
      <p>{location}</p>
      <p>{startDate}</p>
      <p>{endDate}</p>
      <button onClick={handleEditForm}>Edit</button>
    </>
  );
}

export default function EducationInfo({ handleEducationValue }) {
  const [input, setInput] = useState({
    degree: '',
    school: '',
    location: '',
    startDate: '',
    endDate: '',
  });
  const [isExpand, setIsExpand] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  function handleEditForm() {
    setFormSubmitted(false);
  }

  function handleToggleExpand() {
    setIsExpand((prevValue) => !prevValue);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    handleEducationValue(input);
    setFormSubmitted(true);
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
      {isExpand && !formSubmitted ? (
        <RenderForm
          handleOnSubmit={handleOnSubmit}
          handleInputChange={handleInputChange}
          data={input}
        />
      ) : null}
      {isExpand && formSubmitted ? (
        <DisplayFormData data={input} handleEditForm={handleEditForm} />
      ) : null}
    </div>
  );
}
