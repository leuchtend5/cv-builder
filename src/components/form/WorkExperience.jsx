import { useState } from 'react';

function RenderForm({ handleOnSubmit, handleInputChange }) {
  return (
    <>
      <form id="form-work-exp" onSubmit={handleOnSubmit}>
        <div className="input-container">
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            id="job-title"
            name="jobTitle"
            onChange={handleInputChange}
            placeholder="Enter your position/job title"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            id="company-name"
            name="companyName"
            onChange={handleInputChange}
            placeholder="Enter company name"
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

        <div className="input-container">
          <label htmlFor="location">
            Location
            <span>(optional)</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            onChange={handleInputChange}
            placeholder="Enter your company location"
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="description">
            Description
            <span>(optional)</span>
          </label>
          <textarea
            id="description"
            name="description"
            onChange={handleInputChange}
            placeholder="Enter your job description"
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

export default function WorkExperience({ handleDataValue }) {
  const [input, setInput] = useState({
    jobTitle: '',
    companyName: '',
    startDate: null,
    endDate: null,
    location: '',
    description: '',
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
        <h2>Work Experience</h2>
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
