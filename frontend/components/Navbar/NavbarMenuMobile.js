import Link from "next/link";

export const NavbarMenuMobile = ({ visible, onExit }) => {
  if (visible)
    return (
      <div className="absolute left-0 top-0 w-screen h-screen z-10 flex flex-row bg-black bg-opacity-50">
        <div className="bg-white w-[500px] h-full">
          <ul
            className="list-none whitespace-nowrap text-base flex flex-col gap-16 pl-10 pt-10"
            onClick={onExit}
          >
            <li className="inline">
              <Link href="/">Home</Link>
            </li>
            <li className="inline">
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li className="inline">
              <Link href="/browse/1">Courses</Link>
            </li>
          </ul>
        </div>

        <div className="w-full h-full" onClick={onExit} />
      </div>
    );
};
