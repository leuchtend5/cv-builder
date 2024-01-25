import { useState } from 'react';
import { nanoid } from 'nanoid';

function RenderForm({ handleOnSubmit, handleInputChange, data, formSubmitted }) {
  const { id, degree, school, location, startDate, endDate } = data;
  return (
    <>
      <form id="form-education" onSubmit={(e) => handleOnSubmit(e, id)}>
        <input type="hidden" name="id" value={id} />
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

        {formSubmitted ? <button>Save</button> : <button>Submit</button>}
        {/* <button>Submit</button> */}
      </form>
    </>
  );
}

function DisplayFormData({ data, handleEditForm, handleAddNewData }) {
  return (
    <>
      {data.map((item) => (
        <div className="display-form-data" key={item.id}>
          <p>{item.degree}</p>
          <p>{item.school}</p>
          <p>{item.location}</p>
          <p>{item.startDate}</p>
          <p>{item.endDate}</p>
          <button onClick={() => handleEditForm(item)}>Edit</button>
        </div>
      ))}
      <button onClick={handleAddNewData}>Add</button>
    </>
  );
}

export default function EducationInfo({ handleEducationValue }) {
  const [input, setInput] = useState({
    id: nanoid(),
    degree: '',
    school: '',
    location: '',
    startDate: '',
    endDate: '',
  });
  const [isExpand, setIsExpand] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [education, setEducation] = useState([]);

  function handleEditForm(data) {
    setFormSubmitted(false);
    setInput({
      id: data.id,
      degree: data.degree,
      school: data.school,
      location: data.location,
      startDate: data.startDate,
      endDate: data.endDate,
    });
  }

  function handleAddNewData() {
    setFormSubmitted(false);
    setInput({
      id: nanoid(),
      degree: '',
      school: '',
      location: '',
      startDate: '',
      endDate: '',
    });
  }

  function handleToggleExpand() {
    setIsExpand((prevValue) => !prevValue);
  }

  function handleOnSubmit(e, id) {
    e.preventDefault();
    const checkIdInArray = education.some((item) => item.id === id);
    if (checkIdInArray) {
      setEducation((prevEducation) => {
        return prevEducation.map((item) => {
          if (item.id === id) {
            // Update the existing item with new values from the input state
            return { ...item, ...input };
          }
          return item;
        });
      });
    } else {
      setEducation((prevEducation) => [...prevEducation, input]);
    }

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
          formSubmitted={formSubmitted}
        />
      ) : null}
      {isExpand && formSubmitted ? (
        <DisplayFormData
          data={education}
          handleEditForm={handleEditForm}
          handleAddNewData={handleAddNewData}
        />
      ) : null}
    </div>
  );
}
