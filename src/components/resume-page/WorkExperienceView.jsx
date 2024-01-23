export default function WorkExperienceView({ workExpValue }) {
  const {
    jobTitle = 'clerk',
    companyName = 'pt asd',
    startDate = 'november',
    endDate = 'december',
    location = 'jakarta',
    description = 'happy',
  } = workExpValue;

  return (
    <>
      <div className="resume-workexp">
        <h2>Work Experience</h2>
        <div className="section-workexp">
          <div>
            <p>{startDate}</p>
            <p>{endDate}</p>
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
