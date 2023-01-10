import CourseCard from "../../components/CourseCard";
import { Footer } from "../../components/Footer/Footer";
import PageSelector from "../../components/Pagination/PageSelector";

export default function () {
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
              <ul className="font-light text-md text-stone-400">
                <Filter name="Technology" />
                <Filter name="Computer Science" />
                <Filter name="Data Science" />
                <Filter name="Web Development" />
                <Filter name="Infrastructure" />
                <Filter name="Front-end" />
                <Filter name="Back-end" />
                <Filter name="UX/UI" />
              </ul>
            </div>

            <div className="flex flex-col items-end">
              <CourseCard
                name="Abstract Data Structure and Algorithm (DSA)"
                id="5403213"
                instructor="Dr. Chris Dixon"
                tags={["Technology", "Computer Science", "Data Science"]}
                description="Practice your English and learn new things with the platform. Make
              learning words more fun with mini-games. Some more random text here
              would be fine."
                onEnroll={() => {}}
              />
            </div>
          </div>
        </div>
        <PageSelector pageCount={5} />
      </div>
      <Footer />
    </>
  );
}

const Filter = (props) => {
  return (
    <li className="mb-1">
      <input type="checkbox" id={props.name} className="mr-2" />
      <label htmlFor={props.name} className="text-sm">
        {props.name}
      </label>
    </li>
  );
};
