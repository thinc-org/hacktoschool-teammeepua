import Image from "next/image";
import { Footer } from "../../components/Footer";
import { useRouter } from "next/router";
import { Button } from "../../components/Button";

export default function Login() {
  return (
    <>
      {/* HEADER HERE */}

      <div className="absolute w-screen flex flex-col items-center top-32">
        <h1 className="text-3xl mb-4 font-semibold">Login to Thic Academy</h1>
        <h3 className="text-lg text-gray-500 font-semibold">Log in as</h3>
      </div>

      <div className="h-screen flex flex-col items-center justify-center">
        <div className="w-screen flex flex-row justify-center">
          <LoginContainer
            src="/../public/instructors.png"
            name="Course Instructor"
            href="/login/courseinstructor"
          />

          {/* Vertical line */}
          <div className="border-l-2 border-solid border-stone-300"></div>

          <LoginContainer
            src="/../public/students.png"
            name="Students"
            href="/login/student"
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-screen">
        <Footer />
      </div>
    </>
  );
}

const LoginContainer = (props) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center w-60 h-60 m-12">
      <div className="relative w-36 h-36 mb-14">
        <Image
          alt={props.name}
          src={props.src}
          fill
          className="object-contain"
        />
      </div>

      <Button value={props.name} onClick={() => router.push(props.href)} />
    </div>
  );
};
