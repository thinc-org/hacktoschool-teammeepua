import { useState } from "react";
import { EditProfile } from "./Edit/EditProfile";
import { ProfileBanner } from "./ProfileBanner";
import { ProfileDescription } from "./View/ProfileDescription";

export const ProfilePane = ({ data }) => {
  const [isEditProfile, setEditProfile] = useState(false);

  return (
    <div className="w-[350px] h-max">
      <ProfileBanner name={data.displayName} />

      {isEditProfile && (
        <EditProfile data={data} onSaveProfile={() => setEditProfile(false)} />
      )}

      {!isEditProfile && (
        <ProfileDescription
          data={data}
          onEditProfile={() => setEditProfile(true)}
        />
      )}
    </div>
  );
};
