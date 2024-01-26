import { nanoid } from 'nanoid';
import { useState } from 'react';

function RenderForm({ handleOnSubmit, handleInputChange, data }) {
  const { id, jobTitle, companyName, startDate, endDate, location, description } = data;

  return (
    <>
      <form id="form-work-exp" onSubmit={(e) => handleOnSubmit(e, id)}>
        <div className="input-container">
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            id="job-title"
            name="jobTitle"
            value={jobTitle}
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
            value={companyName}
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

        <div className="input-container">
          <label htmlFor="location">
            Location
            <span>(optional)</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={location}
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
            value={description}
            onChange={handleInputChange}
            placeholder="Enter your job description"
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </>
  );
}

function DisplayFormData({ data, handleEditForm, handleAddNewData }) {
  return (
    <>
      {data.map((item) => (
        <div className="display-form-data" key={item.id}>
          <p>{item.jobTitle}</p>
          <p>{item.companyName}</p>
          <p>{item.startDate}</p>
          <p>{item.endDate}</p>
          <p>{item.location}</p>
          <p>{item.description}</p>
          <button onClick={() => handleEditForm(item)}>Edit</button>
        </div>
      ))}
      <button onClick={handleAddNewData}>Add</button>
    </>
  );
}

export default function WorkExperience({ handleWorkExpValue }) {
  const [input, setInput] = useState({
    id: nanoid(),
    jobTitle: '',
    companyName: '',
    startDate: '',
    endDate: '',
    location: '',
    description: '',
  });
  const [isExpand, setIsExpand] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [workExp, setWorkExp] = useState([]);

  function handleEditForm(data) {
    setFormSubmitted(false);
    setInput({
      id: data.id,
      jobTitle: data.jobTitle,
      companyName: data.companyName,
      startDate: data.startDate,
      endDate: data.endDate,
      location: data.location,
      description: data.description,
    });
  }

  function handleAddNewData() {
    setFormSubmitted(false);
    setInput({
      id: nanoid(),
      jobTitle: '',
      companyName: '',
      startDate: '',
      endDate: '',
      location: '',
      description: '',
    });
  }

  function handleToggleExpand() {
    setIsExpand((prevValue) => !prevValue);
  }

  function handleOnSubmit(e, id) {
    e.preventDefault();
    const checkIdInArray = workExp.some((item) => item.id === id);
    if (checkIdInArray) {
      setWorkExp((prevWorkExp) => {
        return prevWorkExp.map((item) => {
          if (item.id === id) {
            // Update the existing item with new values from the input state
            return { ...item, ...input };
          }
          return item;
        });
      });
    } else {
      setWorkExp((prevWorkExp) => [...prevWorkExp, input]);
    }

    setFormSubmitted(true);
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  }

  handleWorkExpValue(workExp);

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
      {isExpand && !formSubmitted ? (
        <RenderForm
          handleOnSubmit={handleOnSubmit}
          handleInputChange={handleInputChange}
          data={input}
        />
      ) : null}
      {isExpand && formSubmitted ? (
        <DisplayFormData
          data={workExp}
          handleEditForm={handleEditForm}
          handleAddNewData={handleAddNewData}
        />
      ) : null}
    </div>
  );
}
