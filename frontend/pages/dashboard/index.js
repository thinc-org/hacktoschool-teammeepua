import { Footer } from "../../components/Footer/Footer";
import CourseCard from "../../components/CourseCard";
import { useSelector } from "react-redux";
import { ProfilePane } from "../../components/Dashboard/ProfilePane";

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
  const { data } = useSelector((state) => state.user);

  return (
    <>
      <div className="bg-stone-100 w-screen flex flex-row justify-center pt-8">
        <ProfilePane data={data} />

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

const CourseList = () => {
  return (
    <div className="flex flex-col items-end">
      {courses.map((i) => (
        <CourseCard {...dummyData[i]} id={i} key={i} />
      ))}
    </div>
  );
};
