import Link from "next/link";
import Image from "next/image";
import { Button } from "./Button";

export default function CourseCard() {
  return (
    <div className="w-[720px] h-[315px] bg-white rounded-xl shadow-md mb-4 overflow-hidden flex flex-row">
      <div className="relative w-[315px] h-[315px]">
        <Image src="/../public/course image.png" fill className="object-fill" />
      </div>
      <div className="p-6 w-[400px] h-max overflow-hidden">
        <h1 className="font-bold text-xl text-stone-500 mb-2">
          Abstract Data Structure and Algorithm (DSA)
        </h1>
        <div className="text-sm mb-2">
          <span className="font-bold tracking-widest text-cyan-700 mr-4">
            5403213
          </span>
          <span className="font-semibold">Dr. Chris Dixon</span>
        </div>
        <div className="text-stone-400 font-medium text-xs flex flex-row gap-3 mb-3">
          <span>Technology</span>
          <span>Computer Science</span>
          <span>Data Science</span>
        </div>
        <div className="mb-3">
          Practice your English and learn new things with the platform. Make
          learning words more fun with mini-games. Some more random text here
          would be fine.
        </div>
        <div>
          <Button value="Enroll" />
          <Link href="" className="underline font-md text-sm ml-4">
            View Example
          </Link>
        </div>
      </div>
    </div>
  );
}
