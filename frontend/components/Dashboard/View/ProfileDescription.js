import { SubProfile } from "./SubProfile";
import { SubProfileLink } from "./SubProfileLink";

export const ProfileDescription = ({ data, onEditProfile }) => {
  return (
    <div className="flex flex-col justify-start gap-4">
      <SubProfile label="Display Name">{data.displayName}</SubProfile>
      <SubProfile label="Full Name">{`${data.firstName} ${data.lastName}`}</SubProfile>
      <SubProfile
        label={`${data.role === "student" ? "Student" : "Instructor"} ID`}
      >
        {data.ID}
      </SubProfile>
      <SubProfile label="Email Address">{data.email}</SubProfile>
      <SubProfile label="Social Media Accounts">
        <div className="flex flex-col text-stone-500">
          {console.log(data)}
          {data.socialFacebook !== "" && (
            <SubProfileLink href={data.socialFacebook} label="Facebook" />
          )}
          {data.socialYoutube !== "" && (
            <SubProfileLink href={data.socialYoutube} label="Youtube" />
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
