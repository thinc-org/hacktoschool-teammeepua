import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer/Footer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import axios from "axios";

export default function UserLogin() {
  const router = useRouter();
  const { user } = router.query;
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = (e) => {
    let message = {
      ...e,
      role: user,
    };

    console.log(message);

    axios
      .post("http://localhost:3100/api/login", message)
      .then((res) => {
        console.log(res);
        dispatch(login(res.data));
        router.push("/dashboard");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="bg-stone-100 pt-12 pb-8 w-screen h-max flex flex-col items-center">
        <h1 className="text-3xl font-semibold mb-3">Login to Thinc Academy</h1>
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
          <span>{user === "student" ? "Instructor" : "Student"} Login</span>
        </Link>

        <form
          className="w-[720px] h-auto text-stone-500 rounded-xl border-white bg-white shadow-xl px-20 py-11"
          onSubmit={handleSubmit(onSubmitHandler)}
        >
          <InputField
            header={"Email"}
            type="text"
            placeholder="something@mail.com"
            name="email"
            register={register}
            error={errors}
          />

          <InputField
            header={"Password"}
            type="password"
            placeholder="*******"
            name="password"
            register={register}
            error={errors}
          />

          <div className="flex flex-col gap-3 items-center w-full">
            <Button>Log In</Button>

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
