import Link from "next/link";
export const FooterList = () => {
  return (
    <ul className="list-none whitespace-nowrap text-sm ">
      <li className="inline mx-3 md:block lg:mb-4">
        <Link href="/">Home</Link>
        </li>
      <li className="inline mx-3 md:block lg:my-4">
        <Link href="/dashboard">Dashboard</Link>
        </li>
      <li className="inline mx-3 md:block lg:my-4">
        <Link href="/browse">Course Browser</Link>
        </li>
      <li className="inline mx-3 md:block lg:my-4">
        <Link href="/login">Log In</Link>
        </li>
      <li className="inline mx-3 md:block lg:my-4">
        <Link href="/signup">Sign Up</Link>
        </li>
    </ul>
  );
};
