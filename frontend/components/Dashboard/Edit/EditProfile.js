import { EditSubProfile } from "./EditSubProfile";
import { SubProfile } from "../View/SubProfile";
import { EditSubProfileLink } from "./EditSubProfileLink";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";

export const EditProfile = ({ data, onSaveProfile }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const onSubmitHandler = (e) => {
    let [firstName, lastName] = e.fullName.split(" ");

    let message = {
      ...e,
      email: data.email,
      userID: data.ID,
      firstName: firstName,
      lastName: lastName,
    };

    axios.patch("http://localhost:3100/api/userinfo", message).then((res) => {
      onSaveProfile();
      router.push("/dashboard");
    });
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
        name="displayName"
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

      <SubProfile label="Student ID">{data.ID}</SubProfile>
      <SubProfile label="Email Address">{data.email}</SubProfile>

      <SubProfile label="Social Media Accounts">
        <EditSubProfileLink
          header="Facebook"
          type="text"
          name="socialFacebook"
          placeholder={data.socialFacebook}
          register={register}
          error={errors}
        />

        <EditSubProfileLink
          header="Youtube"
          type="text"
          name="socialYoutube"
          placeholder={data.socialYoutube}
          register={register}
          error={errors}
        />

        <EditSubProfileLink
          header="Zoom"
          type="text"
          name="socialZoom"
          placeholder={data.socialZoom}
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
