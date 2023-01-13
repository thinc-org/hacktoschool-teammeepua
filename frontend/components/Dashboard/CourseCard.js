import Image from "next/image";
import { CourseCardMenu } from "./CourseCardMenu";

export const CourseCard = (props) => {
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
        <h1 className="font-bold text-xl text-stone-500 mb-2">{props.name}</h1>
        <div className="text-sm mb-2">
          <span className="font-bold tracking-widest text-cyan-700 mr-4">
            {props.id}
          </span>
          <span className="font-semibold">{props.instructor}</span>
        </div>
        <div className="text-stone-400 font-medium text-xs relative flex flex-row gap-3 mb-3">
          {props.tags.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>

        <div className="mb-3 h-[96px] overflow-hidden text-ellipsis">
          {props.description}
        </div>

        <CourseCardMenu />
      </div>
    </div>
  );
};
