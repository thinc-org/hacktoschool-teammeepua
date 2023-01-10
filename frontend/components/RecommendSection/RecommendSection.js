import { Button } from "../Button";
import { CourseCard } from "./CourseCard";
import { OtherCourse } from "./OtherCourse";
import { PopularCourse } from "./PopularCourse";

export const RecommendSection = () => {
  return (
    <div className=" px-40 lg:px-20 md:px-10 sm:px-4 py-10 flex flex-col justify-between">
      <PopularCourse />
      <OtherCourse />
    </div>
  );
};
