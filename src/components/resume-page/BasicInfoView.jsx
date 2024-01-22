export default function BasicInfoView({ data }) {
  const {
    firstName = 'John',
    lastName = 'Doe',
    email = 'asd@gmail.com',
    phoneNumber = '081234567898',
    address = 'jakarta',
  } = data;

  return (
    <>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
      <h3>{email}</h3>
      <h4>{phoneNumber}</h4>
      <h5>{address}</h5>
    </>
  );
}
