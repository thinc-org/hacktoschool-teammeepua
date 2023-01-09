import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer/Footer";

export default function UserLogin() {
  const router = useRouter();
  const { user } = router.query;

  return (
    <div className="bg-stone-100 w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-3">Login to Thinc Academy</h1>
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
        <span>
          {user === "student" ? "Course Instructor" : "Student"} Login
        </span>
      </Link>

      <form className="w-[720px] h-auto text-stone-500 rounded-xl border-white bg-white shadow-xl px-20 py-11">
        <TextField
          header={"Email"}
          type="text"
          placeholder="something@mail.com"
        />

        <TextField header={"Password"} type="password" placeholder="*******" />

        <div className="flex flex-col gap-3 items-center w-full">
          <Button value="Log In" />

          <div>
            <NoLoginContainer
              question="Forgot your password?"
              linkName="Click Here"
              href=""
            />
            <NoLoginContainer
              question="Do not have an account yet?"
              linkName="Sign Up"
              href="/signup"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

const TextField = (props) => {
  return (
    <div className="m-4">
      <label className="text-md font-medium mb-2 px-1">{props.header}</label>
      <input
        type={props.type}
        placeholder={props.placeholder}
        className="border rounded-lg p-2 w-full h-12 placeholder: text-sm placeholder: font-normal placeholder: px-3"
      />
    </div>
  );
};

const NoLoginContainer = (props) => {
  return (
    <div>
      <label className="font-medium">{props.question} </label>
      <Link href={props.href} className="underline text-cyan-700 font-semibold">
        {props.linkName}
      </Link>
    </div>
  );
};
