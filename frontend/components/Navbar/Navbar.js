import { NavbarMenu } from "./NavbarMenu";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarAuth } from "./NavbarAuth";
import { NavbarHam } from "./NavbarHam";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[10%] lg:px-20 md:px-10 sm:px-4 h-20 w-full bg-stone-100">
      {/* mobile only */}
      <NavbarHam />
      <div className="flex items-center lg:flex-row-reverse">
        <NavbarLogo />
        {/* desktop only*/}
        <div className="h-[20px] w-px bg-stone-300 lg:hidden"></div>{" "}
        {/* grey line */}
        <NavbarMenu />
      </div>

      <NavbarAuth />
    </nav>
  );
};
