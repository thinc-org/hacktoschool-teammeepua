import { Button } from "../Button";
import { CourseCard } from "./CourseCard";
import { OtherCourse } from "./OtherCourse";
import { PopularCourse } from "./PopularCourse";

export const RecommendSection = () => {
  return (
    <div className="h-[430px] px-40 py-10 flex flex-col justify-between">
      <PopularCourse />
      <OtherCourse />
    </div>
  );
};
