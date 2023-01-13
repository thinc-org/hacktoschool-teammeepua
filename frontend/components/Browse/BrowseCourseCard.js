import Link from "next/link";
import Image from "next/image";
import { Button } from "../Button";
import { RightArrow } from "../SVGIcon/RightArrow";

export const CourseCard = (props) => {
  return (
    <div className="w-[860px] h-[310px] bg-white rounded-xl shadow-lg mb-5 overflow-hidden flex flex-row hover:scale-[1.01] transition">
      <div className="relative w-[310px] h-[310px] flex-none">
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

        <div className="absolute bottom-0 py-4 w-full bg-white">
          <Button onClick={props.onEnroll}>
            <span className="flex flex-row items-center">
              Enroll
              <RightArrow />
            </span>
          </Button>
          <Link href="" className="underline font-md text-sm ml-4">
            View Example
          </Link>
        </div>
      </div>
    </div>
  );
};
