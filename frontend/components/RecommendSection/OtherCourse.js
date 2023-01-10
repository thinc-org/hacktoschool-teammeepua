import { CourseCard } from "./CourseCard";

export const OtherCourse = () => {
  return (
    <div>
      <p className="text-lg md:text-base font-medium text-stone-500 my-5 sm:text-center">
        Other popular courses
      </p>
      <div className="flex justify-between sm:flex-col sm:items-center">
        <CourseCard name="Machine Learning" />
        <CourseCard name="Start Front-end with React" />
        <CourseCard name="Start Back-end with Node.js" />
      </div>
    </div>
  );
};
