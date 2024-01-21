export default function EducationInfo() {
  return (
    <div>
      <h2>Education</h2>
      <form id="form-education">
        <div className="input-container">
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            id="degree"
            name="degree"
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
            placeholder="Enter your University location"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="start-date">Start Date</label>
          <input type="date" id="start-date" name="start-date" required></input>
        </div>

        <div className="input-container">
          <label htmlFor="end-date">End Date</label>
          <input type="date" id="end-date" name="end-date" required></input>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
