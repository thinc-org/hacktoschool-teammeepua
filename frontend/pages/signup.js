import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "../components/Button";

export default function UserLogin() {
  const [radioState, setRadioState] = useState("Student");

  const onRadioInputChange = (e) => {
    setRadioState(e.target.value);
  };

  return (
    <div className="bg-stone-100 w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-3">Sign Up to Thinc Academy</h1>

      <Link
        href="/login"
        className="text-lg font-medium text-stone-500 mb-8 flex items-center"
      >
        <Image
          className="inline mx-2"
          src="/../public/vector.png"
          width={16}
          height={16}
        />
        <span>Return to Log In</span>
      </Link>

      <form className="w-[720px] h-auto text-stone-500 rounded-xl border-white bg-white shadow-xl px-20 py-11">
        <TextField
          header="Email"
          type="text"
          placeholder="something@email.com"
        />
        <TextField header="First Name" type="text" placeholder="John" />
        <TextField header="Last Name" type="text" placeholder="Oliver" />
        <TextField header="Password" type="password" placeholder="*******" />

        <label>You are a</label>
        <div className="mt-2 mb-6">
          <input
            type="radio"
            value="Student"
            onChange={onRadioInputChange}
            checked={radioState === "Student"}
            id="Student"
          />
          <label htmlFor="Student" className="ml-2 mr-20">
            Student
          </label>

          <input
            type="radio"
            onChange={onRadioInputChange}
            checked={radioState === "Teacher"}
            value="Teacher"
            id="Teacher"
          />
          <label htmlFor="Teacher" className="ml-2 mr-20">
            Teacher
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
  );
}

const TextField = (props) => {
  return (
    <div className="mb-8">
      <label className="text-md font-medium mb-2 px-1">{props.header}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="border rounded-lg p-2 w-full h-12 placeholder: text-sm placeholder: font-normal placeholder: px-3"
      />
    </div>
  );
};
