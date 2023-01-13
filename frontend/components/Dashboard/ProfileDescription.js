import { EditSubProfile } from "./EditSubProfile";
import { SubProfile } from "./SubProfile";
import { EditSubProfileLink } from "./EditSubProfileLink";
import { useForm } from "react-hook-form";

export const ProfileDescription = ({ data, onEditProfile }) => {
  return (
    <div className="flex flex-col justify-start gap-4">
      <SubProfile label="Display Name">{data.displayName}</SubProfile>
      <SubProfile label="Full Name">{`${data.firstName} ${data.lastName}`}</SubProfile>
      <SubProfile label="Student ID">{data.ID}</SubProfile>
      <SubProfile label="Email Address">{data.email}</SubProfile>
      <SubProfile label="Social Media Accounts">
        <div className="flex flex-col text-stone-500">
          {data.socialFacebook !== "" && (
            <SubProfileLink href="http://www.facebook.com" label="Facebook" />
          )}
          {data.socialFacebook !== "" && (
            <SubProfileLink href="http://www.youtube.com" label="Youtube" />
          )}
        </div>
      </SubProfile>

      <button
        className="w-fit rounded-full bg-[#c3dce3] hover:bg-[#a8d8e5] px-5 py-2 text-cyan-700 text-sm font-bold"
        onClick={onEditProfile}
      >
        Edit Profile
      </button>
    </div>
  );
};
