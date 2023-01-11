import Link from "next/link";

export const NavbarMenu = () => {
  return (
    <ul className="list-none whitespace-nowrap text-base">
      <li className="inline ml-6 mr-4 ">
        <Link href="/">Home</Link>
      </li>
      <li className="inline mx-4 ">
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li className="inline mx-4 ">
        <Link href="/browse">Courses</Link>
      </li>
    </ul>
  );
};
