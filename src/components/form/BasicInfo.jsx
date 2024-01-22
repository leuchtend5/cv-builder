import { useState } from 'react';

function RenderForm({ handleOnSubmit, handleInputChange }) {
  return (
    <>
      <form id="form-basic-info" onSubmit={handleOnSubmit}>
        <div className="input-container">
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            onChange={handleInputChange}
            placeholder="Enter your first name"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            onChange={handleInputChange}
            placeholder="Enter your last name"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleInputChange}
            placeholder="Enter your email"
            pattern="([a-zA-Z0-9\-\\_\.]+)@([a-zA-Z]+)\.(.+)"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            type="tel"
            id="phone-number"
            name="phoneNumber"
            placeholder="Enter your phone number"
            onChange={handleInputChange}
            minLength={12}
            maxLength={15}
            pattern="[0-9]{12,}"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleInputChange}
            placeholder="Enter your address"
            required
          ></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default function BasicInfo({ handleDataValue }) {
  const [input, setInput] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
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
        <h2>Basic Info</h2>
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
