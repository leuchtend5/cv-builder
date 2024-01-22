import BasicInfoView from './BasicInfoView';
import EducationInfoView from './EducationInfoView';
import WorkExperienceView from './WorkExperienceView';

export default function Resume({ data }) {
  return (
    <div className="resume-container">
      <div>
        <BasicInfoView data={data} />
        <EducationInfoView />
        <WorkExperienceView />
      </div>
    </div>
  );
}
