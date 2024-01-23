import BasicInfoView from './BasicInfoView';
import EducationInfoView from './EducationInfoView';
import WorkExperienceView from './WorkExperienceView';

export default function Resume({ basicInfoValue, educationValue, workExpValue }) {
  return (
    <div className="resume-container">
      <div>
        <BasicInfoView basicInfoValue={basicInfoValue} />
        <EducationInfoView educationValue={educationValue} />
        <WorkExperienceView workExpValue={workExpValue} />
      </div>
    </div>
  );
}
