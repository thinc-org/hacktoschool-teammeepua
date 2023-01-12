import { useRouter } from "next/router";
import { X } from "../SVGIcon/X";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import RightArrow from "../SVGIcon/RightArrow";

export const NavbarMenuMobile = ({ visible, onExit }) => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  return (
    <>
      <div
        className={`
          absolute left-0 top-0 w-screen h-screen z-20 flex flex-row
          ease-in-out transition-all duration-200
          ${visible ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="bg-white w-[500px] h-full">
          <div
            className="flex justify-start w-min mx-10 mt-8 mb-6 cursor-pointer
            hover:text-stone-400"
            onClick={onExit}
          >
            <X />
          </div>

          <ul
            className="list-none whitespace-nowrap text-base flex flex-col"
            onClick={onExit}
          >
            <ItemTab href="/">Home</ItemTab>
            <ItemTab href="/dashboard">Dashboard</ItemTab>
            <ItemTab href="/browse/1">Courses</ItemTab>

            {!data.isLoggedIn && (
              <>
                <ItemTab href="/signup">Sign Up</ItemTab>
                <ItemTab href="/login">Log In</ItemTab>
              </>
            )}

            {data.isLoggedIn && (
              <li
                className="hover:bg-stone-200 w-full pl-10 py-5 ease-in-out transition-all cursor-pointer"
                onClick={() => dispatch(logout())}
              >
                Sign Out
              </li>
            )}
          </ul>
        </div>

        {/* Empty right space for exiting the menu */}
        <div className="w-full h-full" onClick={onExit} />
      </div>

      {/* Black screen behind */}
      <div
        className={`
        absolute left-0 top-0 w-screen h-screen bg-black bg-opacity-50 z-10
        ${visible ? "" : "hidden"}
      `}
      />
    </>
  );
};

const ItemTab = (props) => {
  const router = useRouter();

  return (
    <li
      className="hover:bg-stone-200 w-full pl-10 py-5 ease-in-out transition-all cursor-pointer"
      onClick={() => router.push(props.href)}
    >
      {props.children}
    </li>
  );
};
