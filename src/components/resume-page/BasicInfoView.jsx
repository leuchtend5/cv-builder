export default function BasicInfoView({ basicInfoValue }) {
  const {
    firstName = 'John',
    lastName = 'Doe',
    email = 'asd@gmail.com',
    phoneNumber = '081234567898',
    address = 'jakarta',
  } = basicInfoValue;

  return (
    <>
      <div className="resume-header">
        <div className="section-name">
          <p>{firstName}</p>
          <p>{lastName}</p>
        </div>
        <div className="section-contact">
          <p>{email}</p>
          <p>{phoneNumber}</p>
          <p>{address}</p>
        </div>
      </div>
    </>
  );
}
