import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/Button";

export default function TeacherLogin() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen font-montserrat bg-gray-100">
        <h1 className="text-3xl font-semibold mb-3">Login to Thinc Academy</h1>
        <Link href="/login" className="text-lg font-medium text-stone-500 mb-8">
          <Image
            className="inline mx-2"
            src="/../public/vector.png"
            width={16}
            height={16}
          />
          Student Login
        </Link>

        <div className="w-2/5 h-1/2 text-stone-500 rounded-lg border border-white bg-white shadow-xl px-20 py-11">
          <TextField
            header={"Email"}
            type="text"
            placeholder="something@mail.com"
          />
          <TextField
            header={"Password"}
            type="password"
            placeholder="*******"
          />
          <div className="flex flex-col items-center w-full">
            <Button value="Log In" />
            <p className="mt-2">
              Forgot your password?{" "}
              <Link href="" className="underline text-cyan-700">
                Click Here
              </Link>
            </p>
            <p>
              Do not have an account yet?{" "}
              <Link href="" className="underline text-cyan-700">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

const TextField = (props) => {
  return (
    <div className="m-4">
      <p className="text-md font-medium mb-2 px-1">{props.header}</p>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="border rounded-lg p-2 w-full h-12 placeholder: text-sm placeholder: font-normal placeholder: px-3"
      />
    </div>
  );
};