import { useSelector } from "react-redux";
import { Button } from "../Button";

export const CourseCardMenu = ({
  progress = 0,
  primaryOnClick,
  secondaryOnClick,
}) => {
  const { data } = useSelector((state) => state.user);
  const role = data.role;

  return (
    <div className="absolute bottom-0 py-4 w-full bg-white flex flex-row items-center gap-2">
      {role === "instructor" && (
        <>
          <Button onClick={primaryOnClick}>Edit Content</Button>
          <button
            onClick={secondaryOnClick}
            className="underline font-md text-sm ml-4"
          >
            View Students
          </button>
        </>
      )}

      {role === "student" && (
        <>
          <Button onClick={primaryOnClick}>{`Continue (${progress}%)`}</Button>
          <button
            onClick={secondaryOnClick}
            className="underline font-md text-sm ml-4"
          >
            Remove from List
          </button>
        </>
      )}
    </div>
  );
};
