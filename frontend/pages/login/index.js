import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "../../components/Button";

export default function Login() {
  return (
    <div className="bg-stone-100 w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-semibold mb-3">Login to Thinc Academy</h1>
      <h3 className="text-lg text-gray-500 font-medium mb-3">Log in as</h3>

      <div className="flex flex-col items-center justify-center">
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
    </div>
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
