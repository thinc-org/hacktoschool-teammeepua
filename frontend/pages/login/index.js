import Image from "next/image";

export default function Login() {
  return (
    <>
      {/* HEADER HERE */}

      <div className="h-screen flex flex-col items-center justify-center font-montserrat">
        <p className="text-3xl mb-4">Login to Thic Academy</p>
        <p className="text-lg text-gray-500 mb-32">Log in as</p>
        <div className="w-screen flex flex-row justify-center">
          <LoginContainer
            src="/../public/instructors.png"
            name="Course Instructor"
          />

          <LoginContainer src="/../public/students.png" name="Students" />
        </div>
      </div>

      {/* FOOTER HERE */}
    </>
  );
}

const LoginContainer = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-60 m-12">
      <div className="relative w-40 h-40 mb-14">
        <Image
          alt={props.name}
          src={props.src}
          fill
          className="object-contain"
        />
      </div>

      <button
        className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-xl bottom-0 h-12"
        onClick={() => {
          alert("Redirecting to " + props.name + " page");
        }}>
        {props.name}
      </button>
    </div>
  );
};