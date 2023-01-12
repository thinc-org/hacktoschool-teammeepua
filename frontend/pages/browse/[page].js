import { useRouter } from "next/router";
import { Checkbox } from "../../components/Checkbox";
import { CourseCard } from "../../components/CourseCard";
import { Footer } from "../../components/Footer/Footer";
import { PageSelector } from "../../components/Pagination/PageSelector";

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

export default function Browse() {
  const router = useRouter();
  const { page } = router.query;

  return (
    <>
      <div className="bg-stone-100 flex flex-col h-max items-center">
        <h1 className="font-semibold text-2xl mt-12 mb-4">
          What would you like to upskill?
        </h1>
        <input
          className="bg-white mb-8 px-6 rounded-xl w-[820px] h-[55px] shadow-2xl placeholder:font-thin placeholder:text-sm"
          type="text"
          placeholder="front end development, data visualization, blockchain"
        />
        <div>
          <p className="p-2 font-md text-xs text-stone-400 text-right">
            Showing 1-10 of 284
          </p>
          <div className="flex flex-row w-max text-stone-500">
            <div className="flex flex-col items-start w-[320px]">
              <h3 className="font-semibold text-xl mb-4">Categories</h3>
              <ul className="font-light text-md text-stone-500">
                <Filter label="Technology" />
                <Filter label="Computer Science" />
                <Filter label="Data Science" />
                <Filter label="Web Development" />
                <Filter label="Infrastructure" />
                <Filter label="Front-end" />
                <Filter label="Back-end" />
                <Filter label="UX/UI" />
              </ul>
            </div>

            <div className="flex flex-col items-end">
              {courses.map((i) => (
                <CourseCard {...dummyData[i]} id={i} key={i} />
              ))}
            </div>
          </div>
        </div>
        <PageSelector pageCount={10} currentPage={parseInt(page)} />
      </div>
      <Footer />
    </>
  );
}

const Filter = (props) => {
  return (
    <li className="mb-1">
      <Checkbox label={props.label} />
    </li>
  );
};
