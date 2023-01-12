import { useState } from "react";
import { NavbarMenu } from "./NavbarMenu";
import { NavbarMenuMobile } from "./NavbarMenuMobile";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarAuth } from "./NavbarAuth";
import { NavbarHam } from "./NavbarHam";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { NavbarHaveAuth } from "./NavbarHaveAuth";

export const Navbar = () => {
  const router = useRouter();
  const { data } = useSelector((state) => state.user);
  const [isShowMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between px-[10%] lg:px-20 md:px-10 sm:px-4 h-20 w-full bg-stone-100 text-black">
      {/* mobile only */}
      <NavbarHam onClick={() => setShowMobileMenu(true)} />
      <div className="flex items-center lg:flex-row-reverse">
        <NavbarLogo />
        {/* desktop only*/}
        <div className="h-[20px] w-px bg-stone-300 lg:hidden"></div>{" "}
        {/* grey line */}
        <NavbarMenu />
        <NavbarMenuMobile
          visible={isShowMobileMenu}
          onExit={() => setShowMobileMenu(false)}
        />
      </div>

      {!data.isLoggedIn && <NavbarAuth />}
      {data.isLoggedIn && <NavbarHaveAuth />}

      {/* account icon */}
      <div
        className="hidden lg:block scale-75 relative left-2.5 cursor-pointer"
        onClick={() => router.push("/dashboard")}
      >
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
          <path d="M11.1 35.25q3.15-2 6.225-3.025Q20.4 31.2 24 31.2q3.6 0 6.7 1.025t6.25 3.025q2.2-2.7 3.125-5.45Q41 27.05 41 24q0-7.25-4.875-12.125T24 7q-7.25 0-12.125 4.875T7 24q0 3.05.95 5.8t3.15 5.45ZM24 25.5q-2.9 0-4.875-1.975T17.15 18.65q0-2.9 1.975-4.875T24 11.8q2.9 0 4.875 1.975t1.975 4.875q0 2.9-1.975 4.875T24 25.5ZM24 44q-4.2 0-7.85-1.575-3.65-1.575-6.35-4.3Q7.1 35.4 5.55 31.75 4 28.1 4 23.95q0-4.1 1.575-7.75 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24.05 4q4.1 0 7.75 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Z" />
        </svg>
      </div>
    </nav>
  );
};
