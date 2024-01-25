export default function BasicInfoView({ basicInfoValue }) {
  const { firstName, lastName, email, phoneNumber, address } = basicInfoValue;

  return (
    <>
      <div className="resume-header">
        <div className="section-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <div className="section-contact">
          <p>
            <i className="fa-solid fa-envelope"></i>
            {email}
          </p>
          <p>
            <i className="fa-solid fa-phone"></i>
            {phoneNumber}
          </p>
          <p>
            <i className="fa-solid fa-location-dot"></i>
            {address}
          </p>
        </div>
      </div>
    </>
  );
}
