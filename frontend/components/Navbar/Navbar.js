import { useRouter } from "next/router";

import { NavbarMenu } from "./NavbarMenu";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarAuth } from "./NavbarAuth";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[10%] lg:px-20 md:px-10 sm:px-4 h-20 w-full bg-stone-100">
      <div className="flex items-center">
        <NavbarLogo />

        {/* grey line */}
        <div className="h-[20px] w-px bg-stone-300 "></div>

        <NavbarMenu />
      </div>

      <NavbarAuth />
    </nav>
  );
};
