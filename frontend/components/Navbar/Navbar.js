import { Button } from "../Button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-40 h-16 w-full bg-stone-100">
      <div className="flex items-center">
        <p className="text-xl font-bold mr-6">Thinc Academy</p>
        <ul className="list-none whitespace-nowrap text-base">
          <li className="inline mx-4">Home</li>
          <li className="inline mx-4">Dashboard</li>
          <li className="inline mx-4">Course Browser</li>
        </ul>
      </div>

      <div className="flex">
        {/* Change this later */}
        <button className="text-base mx-6">Sign Up</button>
        <button className="text-base">Log In</button>
      </div>
    </nav>
  );
};
