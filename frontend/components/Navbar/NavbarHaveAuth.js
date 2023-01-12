import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/userSlice";
import RightArrow from "../SVGIcon/RightArrow";

export const NavbarHaveAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.user);

  return (
    <div className="flex lg:hidden">
      {/* Change this later */}
      <div className="text-base mx-6">
        <Profile name={data.displayName} />
      </div>
      <button
        className="text-base font-bold"
        onClick={() => {
          dispatch(logout());
          router.push("/");
        }}
      >
        <span className="flex flex-row hover:translate-x-1 transition-all">
          Sign Out <RightArrow bold />
        </span>
      </button>
    </div>
  );
};

const Profile = (props) => {
  return (
    <div className="flex flex-row items-center">
      <div
        className="w-[40px] h-[40px] rounded-full flex items-center justify-center 
        font-bold text-base bg-[#c3dce3] text-cyan-700 mr-3"
      >
        {props.name.substring(0, 1)}
      </div>
      <p>{props.name}</p>
    </div>
  );
};
