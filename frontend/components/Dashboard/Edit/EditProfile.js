import { EditSubProfile } from "./EditSubProfile";
import { SubProfile } from "../SubProfile";
import { EditSubProfileLink } from "./EditSubProfileLink";
import { useForm } from "react-hook-form";
import axios from "axios";

export const EditProfile = ({ data, onSaveProfile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (e) => {
    // save profile
    console.log(e);

    onSaveProfile();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitHandler)}
      className="flex flex-col justify-start gap-4"
    >
      <EditSubProfile
        header="Display Name"
        type="text"
        placeholder={data.displayName}
        name="email"
        register={register}
        error={errors}
      />

      <EditSubProfile
        header="Full Name"
        type="text"
        placeholder={`${data.firstName} ${data.lastName}`}
        name="fullName"
        register={register}
        error={errors}
      />

      <SubProfile label="Full Name">{`${data.firstName} ${data.lastName}`}</SubProfile>
      <SubProfile label="Student ID">{data.ID}</SubProfile>
      <SubProfile label="Email Address">{data.email}</SubProfile>

      <SubProfile label="Social Media Accounts">
        <EditSubProfileLink
          header="Facebook"
          type="text"
          name="socialFacbook"
          register={register}
          error={errors}
        />

        <EditSubProfileLink
          header="Youtube"
          type="text"
          name="socialYoutube"
          register={register}
          error={errors}
        />
      </SubProfile>

      <button className="w-fit rounded-full bg-[#c3dce3] hover:bg-[#a8d8e5] px-5 py-2 text-cyan-700 text-sm font-bold">
        Save Changes
      </button>
    </form>
  );
};
