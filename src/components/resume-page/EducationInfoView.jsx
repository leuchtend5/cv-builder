function RenderView({ data }) {
  return (
    <div className="edu-data-container">
      <div>
        <p>
          {data.startDate} - {data.endDate}
        </p>
        <p>{data.location}</p>
      </div>
      <div>
        <p>{data.school}</p>
        <p>{data.degree}</p>
      </div>
    </div>
  );
}

export default function EducationInfoView({ educationValue }) {
  return (
    <>
      <div className="resume-education">
        <h3>Education</h3>
        <div className="section-education">
          {educationValue.map((item) => (
            <RenderView data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
