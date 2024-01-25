export default function WorkExperienceView({ workExpValue }) {
  const { jobTitle, companyName, startDate, endDate, location, description } = workExpValue;

  return (
    <>
      <div className="resume-workexp">
        <h3>Work Experience</h3>
        <div className="section-workexp">
          <div>
            <p>
              {startDate} - {endDate}
            </p>
            <p>{location}</p>
          </div>
          <div>
            <p>{companyName}</p>
            <p>{jobTitle}</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
