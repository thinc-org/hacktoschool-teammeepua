import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

export default function CourseCard(props) {
  return (
    <div className="w-[850x] h-[310px] bg-white rounded-xl shadow-md mb-4 overflow-hidden flex flex-row">
      <div className="relative w-[310px] h-[310px] flex-none">
        <Image
          alt="Course Image"
          src="/../public/course image.png"
          fill
          className="object-fill"
        />
      </div>
      <div className="p-6 w-[400px] h-max overflow-hidden">
        <h1 className="font-bold text-xl text-stone-500 mb-2">{props.name}</h1>
        <div className="text-sm mb-2">
          <span className="font-bold tracking-widest text-cyan-700 mr-4">
            {props.id}
          </span>
          <span className="font-semibold">{props.instructor}</span>
        </div>
        <div className="text-stone-400 font-medium text-xs flex flex-row gap-3 mb-3">
          {props.tags.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>
        <div className="mb-3 h-[96px] overflow-hidden text-ellipsis">
          {props.description}
        </div>
        <div>
          <Button value="Enroll" onClick={props.onEnroll} />
          <Link href="" className="underline font-md text-sm ml-4">
            View Example
          </Link>
        </div>
      </div>
    </div>
  );
}
