export default function WorkExperience() {
  return (
    <div>
      <h2>Work Experience</h2>
      <form id="form-work-exp">
        <div className="input-container">
          <label htmlFor="job-title">Job Title</label>
          <input
            type="text"
            id="job-title"
            name="job-title"
            placeholder="Enter your position/job title"
            required
          ></input>
        </div>

        <div className="input-container">
          <label htmlFor="company-name">Company Name</label>
          <input
            type="text"
            id="company-name"
            name="company-name"
            placeholder="Enter company name"
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

        <div className="input-container">
          <label htmlFor="location">
            Location
            <span>(optional)</span>
          </label>
          <input
            type="text"
            id="location"
            name="location"
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
            placeholder="Enter your job description"
          ></textarea>
        </div>

        <button>Submit</button>
      </form>
    </div>
  );
}
