import Image from "next/image";
import { Footer } from "../components/Footer";

export default function Login() {
  return (
    <>
      {/* HEADER HERE */}

      <div className="absolute w-screen flex flex-col items-center top-32 font-montserrat">
        <h1 className="text-3xl mb-4">Login to Thic Academy</h1>
        <h3 className="text-lg text-gray-500">Log in as</h3>
      </div>

      <div className="h-screen flex flex-col items-center justify-center font-montserrat">
        <div className="w-screen flex flex-row justify-center">
          <LoginContainer
            src="/../public/instructors.png"
            name="Course Instructor"
          />

          {/* Vertical line */}
          <div className="border-l-2 border-solid border-stone-300"></div>

          <LoginContainer src="/../public/students.png" name="Students" />
        </div>
      </div>

      <div className="absolute bottom-0 w-screen">
        <Footer />
      </div>
    </>
  );
}

const LoginContainer = (props) => {
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

      <button
        className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-lg bottom-0"
        onClick={() => {
          alert("Redirecting to " + props.name + " page");
        }}
      >
        {props.name}
      </button>
    </div>
  );
};
