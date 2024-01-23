export default function EducationInfoView({ educationValue }) {
  const {
    degree = 'EDU TEST',
    school = 'binus',
    location = 'manado',
    startDate = 'December',
    endDate = 'January',
  } = educationValue;

  return (
    <>
      <div className="resume-education">
        <h2>Education</h2>
        <div className="section-education">
          <div>
            <p>{startDate}</p>
            <p>{endDate}</p>
            <p>{location}</p>
          </div>
          <div>
            <p>{school}</p>
            <p>{degree}</p>
          </div>
        </div>
      </div>
    </>
  );
}
