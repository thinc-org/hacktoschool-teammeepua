import { useRouter } from "next/router";
import { Button } from "../Button";
import Link from "next/link";

export const Navbar = () => {
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between px-40 h-20 w-full bg-stone-100">
      <div className="flex items-center">
        <p className="text-xl font-bold mr-6 tracking-tight">Thinc Academy</p>
        <ul className="list-none whitespace-nowrap text-base">
          <li className="inline mx-4">Home</li>
          <li className="inline mx-4">Dashboard</li>
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
