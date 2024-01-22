import { useState } from 'react';
import Form from './components/form/Form';
import Resume from './components/resume-page/resume';

export default function App() {
  const [value, setValue] = useState('');

  function handleDataValue(data) {
    setValue(data);
  }
  return (
    <>
      <div className="main-container">
        <Form handleDataValue={handleDataValue} />
        <Resume data={value} />
      </div>
    </>
  );
}
