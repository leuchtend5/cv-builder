import BasicInfo from './basicInfo';
import EducationInfo from './EducationInfo';
import WorkExperience from './WorkExperience';

export default function Form({ handleDataValue }) {
  return (
    <div className="form-container">
      <h1>CV Builder</h1>
      <BasicInfo handleDataValue={handleDataValue} />
      <EducationInfo handleDataValue={handleDataValue} />
      <WorkExperience handleDataValue={handleDataValue} />
    </div>
  );
}
