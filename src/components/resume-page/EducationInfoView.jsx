export default function EducationInfoView({ educationValue }) {
  const { degree, school, location, startDate, endDate } = educationValue;

  return (
    <>
      <div className="resume-education">
        <h3>Education</h3>
        <div className="section-education">
          <div>
            <p>
              {startDate} - {endDate}
            </p>
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
