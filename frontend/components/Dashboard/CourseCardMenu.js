import { Button } from "../Button";
export const CourseCardInstructorMenu = ({
  primaryOnClick,
  secondaryOnClick,
}) => {
  return (
    <div className="absolute bottom-0 py-4 w-full bg-white flex flex-row items-center gap-2">
      <Button onClick={primaryOnClick}>Edit Content</Button>
      <button
        onClick={secondaryOnClick}
        className="underline font-md text-sm ml-4"
      >
        View Students
      </button>
    </div>
  );
};

export const CourseCardStudentMenu = ({ primaryOnClick, secondaryOnClick }) => {
  return (
    <div className="absolute bottom-0 py-4 w-full bg-white flex flex-row items-center gap-2">
      <Button onClick={primaryOnClick}>Continue</Button>
      <button
        onClick={secondaryOnClick}
        className="underline font-md text-sm ml-4"
      >
        Remove from List
      </button>
    </div>
  );
};
