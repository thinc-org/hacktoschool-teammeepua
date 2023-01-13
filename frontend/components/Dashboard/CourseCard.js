import Image from "next/image";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import {
  CourseCardInstructorMenu,
  CourseCardStudentMenu,
} from "./CourseCardMenu";

export const CourseCard = (props) => {
  const { data } = useSelector((state) => state.user);
  const router = useRouter();

  return (
    <div className="w-[682px] h-[310px] bg-white rounded-xl shadow-lg mb-5 overflow-hidden flex flex-row hover:scale-[1.01] transition">
      <div className="relative w-[170px] h-[310px] flex-none">
        <Image
          alt="Course Image"
          src="/../public/course image.png"
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6 w-full h-full relative">
        <h1 className="font-bold text-xl text-stone-500 mb-2">{props.title}</h1>
        <div className="text-sm mb-2">
          <span className="font-bold tracking-widest text-cyan-700 mr-4">
            {props.courseID}
          </span>
          <span className="font-semibold">{props.instructorFullName}</span>
        </div>
        <div className="text-stone-400 font-medium text-xs relative flex flex-row gap-3 mb-3">
          {props.categories !== null &&
            props.categories.map((e) => <span key={e}>{e}</span>)}
        </div>

        <div className="mb-3 h-[96px] overflow-hidden text-ellipsis">
          {props.description}
        </div>

        {data.role === "student" && (
          <CourseCardStudentMenu
            primaryOnClick={() => {
              router.push(`/course/${props.courseID}/view`);
            }}
          />
        )}
        {data.role === "instructor" && (
          <CourseCardInstructorMenu
            primaryOnClick={() => router.push(`/course/${props.courseID}/edit`)}
            secondaryOnClick={() => props.onShowCourseStudent()}
          />
        )}
      </div>
    </div>
  );
};
