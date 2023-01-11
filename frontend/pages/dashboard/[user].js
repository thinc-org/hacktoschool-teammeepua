import { useRouter } from "next/router";
import { Footer } from "../../components/Footer/Footer";
import CourseCard from "../../components/CourseCard";
import ProfileBanner from "../../components/Dashboard/ProfileBanner";
import Link from "next/link";
import { Button } from "../../components/Button";

const dummyData = {
  5403213: {
    name: "Abstract Data Structure and Algorithm (DSA)",
    instructor: "Dr. Chris Dixon",
    tags: ["Technology", "Computer Science", "Data Science"],
    description:
      "Practice your English and learn new things with the platform. Make learning words more fun with mini-games. Some more random text here would be fine.",
  },
  2110327: {
    name: "Algorithm Design",
    instructor: "Nattee Niparnan",
    tags: ["Computer Science"],
    description: "An algorithm course.",
  },
};

const courses = [5403213, 2110327];

export default function () {
  const router = useRouter();
  const { user } = router.query;

  return (
    <>
      <div className="bg-stone-100 w-screen flex flex-row justify-center pt-8">
        <div className="w-[350px] h-max flex flex-col justify-start gap-4">
          <ProfileBanner name="Alex" />

          <SubProfile label="Display Name">Alex</SubProfile>
          <SubProfile label="Full Name">Alex Morphy</SubProfile>
          <SubProfile label="Student ID">123456</SubProfile>
          <SubProfile label="Email Address">something@email.com</SubProfile>
          <SubProfile label="Social Media Accounts">
            <Link href="" className="underline">
              Facebook
            </Link>
            <br />
            <Link href="" className="underline">
              Youtube
            </Link>
          </SubProfile>
          <button className="w-fit rounded-full bg-[#c3dce3] hover:bg-[#a8d8e5] px-5 py-2 text-cyan-700 text-sm font-bold">
            Edit Profile
          </button>
        </div>

        {/* Vertical line */}
        <div className="border-l-2 border-solid border-stone-300" />

        <div className="pt-4 px-10">
          <h1 className="font-semibold text-2xl mb-8">
            Here are all the courses you are taking
          </h1>
          <CourseList />
        </div>
      </div>
      <Footer />
    </>
  );
}

const SubProfile = (props) => {
  return (
    <div className="text-stone-500">
      <h1 className="font-semibold text-xl">{props.label}</h1>
      <p className="font-medium text-base">{props.children}</p>
    </div>
  );
};

const CourseList = () => {
  return (
    <div className="flex flex-col items-end">
      {courses.map((i) => (
        <CourseCard {...dummyData[i]} id={i} key={i} />
      ))}
    </div>
  );
};
