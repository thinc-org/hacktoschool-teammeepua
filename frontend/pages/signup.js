import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { Footer } from "../components/Footer/Footer";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

export default function UserLogin() {
  const [radioState, setRadioState] = useState("student");
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onRadioInputChange = (e) => {
    setRadioState(e.target.value);
  };

  const onSubmitHandler = (e) => {
    let message = { ...e, displayName: e.firstName, role: radioState };

    axios
      .post("http://localhost:3100/api/signup", message)
      .then((res) => {
        dispatch(setUser(res.data));
        router.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-stone-100 py-12 w-screen h-max flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-3">
          Sign Up to Thinc Academy
        </h1>

        <Link
          href="/login"
          className="text-lg font-medium text-stone-500 mb-8 flex items-center hover:-translate-x-2 transition"
        >
          <Image
            className="inline mx-2"
            src="/../public/vector.png"
            width={16}
            height={16}
          />
          <span>Return to Log In</span>
        </Link>

        <form
          className="w-[720px] h-auto text-stone-500 rounded-xl border-white bg-white shadow-xl px-20 py-11"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <InputField
            header="Email"
            pattern={/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i}
            type="text"
            placeholder="something@email.com"
            name="email"
            register={register}
            error={errors}
          />
          <InputField
            header="First Name"
            type="text"
            placeholder="John"
            name="firstName"
            register={register}
            error={errors}
          />
          <InputField
            header="Last Name"
            type="text"
            placeholder="Oliver"
            name="lastName"
            register={register}
            error={errors}
          />
          <InputField
            header="Password"
            type="password"
            placeholder="*******"
            name="password"
            register={register}
            error={errors}
          />

          <label>You are a</label>
          <div className="mt-2 mb-6">
            <label className="ml-2 mr-20">
              <input
                type="radio"
                value="student"
                onChange={onRadioInputChange}
                checked={radioState === "student"}
                className="mr-2"
              />
              Student
            </label>

            <label className="ml-2 mr-20">
              <input
                type="radio"
                onChange={onRadioInputChange}
                value="instructor"
                checked={radioState === "instructor"}
                className="mr-2"
              />
              Instructor
            </label>
          </div>

          <div className="flex flex-col gap-3 items-center w-full">
            <Button value="Sign Up" />

            <div>
              <label className="font-medium">
                By signing up, you agree to our privacy policy&nbsp;
              </label>
              <Link href="" className="underline text-cyan-700 font-semibold">
                Click Here
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

const InputField = (props) => {
  return (
    <div className="mb-8">
      <label className="text-md font-medium mb-2 px-1">{props.header}</label>
      <input
        {...props.register(props.name, {
          required: true,
          pattern: props.pattern,
        })}
        type={props.type}
        placeholder={props.placeholder}
        className={`
          border rounded-lg p-2 w-full h-12
          placeholder: text-sm placeholder: font-normal placeholder: px-3
          ${props.error[props.name] && "border-red-600 border-2"}
        `}
      />
    </div>
  );
};
