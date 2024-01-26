function RenderView({ data }) {
  return (
    <div className="workexp-data-container">
      <div>
        <p>
          {data.startDate} - {data.endDate}
        </p>
        <p>{data.location}</p>
      </div>
      <div>
        <p>{data.companyName}</p>
        <p>{data.jobTitle}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
}

export default function WorkExperienceView({ workExpValue }) {
  return (
    <>
      <div className="resume-workexp">
        {console.log('asd')}
        <h3>Work Experience</h3>
        <div className="section-workexp">
          {workExpValue.map((item) => (
            <RenderView data={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}
