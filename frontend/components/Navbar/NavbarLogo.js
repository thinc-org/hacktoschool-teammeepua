import Link from "next/link";
import Image from "next/image";
import ThincLogo from "../../public/thinc-logo.png";

export const NavbarLogo = () => {
  return (
    <Link href="/" className="flex lg:absolute lg:left-0 lg:right-0 lg:justify-center">
      <Image src={ThincLogo} width={32} height={32} />
      <p className="text-xl lg:text-lg sm:hidden font-bold mx-6 tracking-tight">
        Thinc Academy
      </p>
    </Link>
  );
};
