import { useState } from 'react';
import Form from './components/form/Form';
import Resume from './components/resume-page/resume';

export default function App() {
  const [basicInfoValue, setBasicInfoValue] = useState('');
  const [educationValue, setEducationValue] = useState([]);
  const [workExpValue, setWorkExpValue] = useState([]);

  function handleBasicInfoValue(data) {
    setBasicInfoValue(data);
  }

  function handleEducationValue(data) {
    setEducationValue(data);
  }

  function handleWorkExpValue(data) {
    setWorkExpValue(data);
  }

  return (
    <>
      <div className="main-container">
        <Form
          handleBasicInfoValue={handleBasicInfoValue}
          handleEducationValue={handleEducationValue}
          handleWorkExpValue={handleWorkExpValue}
        />
        <Resume
          basicInfoValue={basicInfoValue}
          educationValue={educationValue}
          workExpValue={workExpValue}
        />
      </div>
    </>
  );
}
