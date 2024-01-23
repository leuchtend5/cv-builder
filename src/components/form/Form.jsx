import BasicInfo from './basicInfo';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';

export default function Form({ handleBasicInfoValue, handleEducationValue, handleWorkExpValue }) {
  return (
    <div className="form-container">
      <h1>CV Builder</h1>
      <BasicInfo handleBasicInfoValue={handleBasicInfoValue} />
      <EducationInfo handleEducationValue={handleEducationValue} />
      <WorkExperience handleWorkExpValue={handleWorkExpValue} />
    </div>
  );
}
