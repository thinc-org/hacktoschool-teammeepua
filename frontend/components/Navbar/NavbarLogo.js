import Link from "next/link";
import Image from "next/image";
import ThincLogo from "../../public/thinc-logo.png";

export const NavbarLogo = () => {
  return (
    <Link href="/" className="flex">
      <Image src={ThincLogo} width={32} height={32} />
      <p className="text-xl font-bold mx-6 tracking-tight">Thinc Academy</p>
    </Link>
  );
};
