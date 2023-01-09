import { CourseCard } from "./CourseCard";

export const OtherCourse = () => {
  return (
    <div>
      <p className="text-lg font-medium text-stone-500 my-5">
        Other popular courses
      </p>
      <div className="flex justify-between">
        <CourseCard name="Machine Learning" />
        <CourseCard name="Start Front-end with React" />
        <CourseCard name="Start Back-end with Node.js" />
      </div>
    </div>
  );
};
