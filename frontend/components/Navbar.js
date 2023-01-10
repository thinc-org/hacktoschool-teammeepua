import { useRouter } from "next/router";
import { Button } from "./Button";
import Link from "next/link";

import Image from "next/image";
import ThincLogo from "../public/thinc-logo.png";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-40 h-20 w-full bg-stone-100">
      <div className="flex items-center">
        <Link href="/" className="flex">
          <Image src={ThincLogo} width={32} height={32} />
          <p className="text-xl font-bold mx-6 tracking-tight">Thinc Academy</p>
        </Link>
        <div className="h-[20px] w-px bg-stone-300 "></div>
        <ul className="list-none whitespace-nowrap text-base">
          <li className="inline ml-6 mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="inline mx-4">
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className="inline mx-4">
            <Link href="/browse">Courses</Link>
          </li>
        </ul>
      </div>

      <div className="flex">
        {/* Change this later */}
        <button
          className="text-base mx-6"
          onClick={() => router.push("/signup")}
        >
          Sign Up
        </button>
        <button className="text-base" onClick={() => router.push("/login")}>
          Log In
        </button>
      </div>
    </nav>
  );
};
