import { useState } from 'react';
import Form from './components/form/Form';
import Resume from './components/resume-page/Resume';

export default function App() {
  const [basicInfoValue, setBasicInfoValue] = useState('');
  const [educationValue, setEducationValue] = useState([]);
  const [workExpValue, setWorkExpValue] = useState([]);

  return (
    <>
      <div className="main-container">
        <Form
          handleBasicInfoValue={setBasicInfoValue}
          handleEducationValue={setEducationValue}
          handleWorkExpValue={setWorkExpValue}
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
