import { useRouter } from "next/router";
import { Checkbox } from "../../components/Checkbox";
import { CourseCard } from "../../components/Browse/BrowseCourseCard";
import { Footer } from "../../components/Footer/Footer";
import { PageSelector } from "../../components/Pagination/PageSelector";
import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../components/Auth/auth-hook";

export default function () {
  const router = useRouter();
  const { page } = router.query;

  const [isLoaded, setLoaded] = useState(false);
  const [courses, setCourses] = useState([]);
  const [totalPage, setTotalPage] = useState(1);
  const [search, setSearch] = useState("");
  const [totalCourse, setTotalCourse] = useState(0);
  const auth = useAuth();

  useEffect(() => {
    if (router.isReady) {
      axios
        .get(
          `http://localhost:3100/api/browse_course?page_number=${page}&search=${search}`
        )
        .then((res) => {
          console.log(res.data);

          setCourses(res.data.listCourses);
          setTotalPage(res.data.totalPages);
          setTotalCourse(res.data.totalCourse);
          setLoaded(true);
        });
    }
  }, [router, search]);

  const onChangeHandler = (e) => {
    e.preventDefault();
    let s = e.target.value;
    if (s !== undefined) setSearch(s);
  };

  const onEnroll = (courseID) => {
    const { data } = auth.checkAuth();

    console.log(data);

    if (data.role === "instructor") {
      router.push("/login");
    } else {
      axios
        .post("http://localhost:3100/api/enroll", {
          courseID: courseID,
          userID: data.ID,
        })
        .then((res) => {
          // GOTO course view
          router.push(`/course/${courseID}/view`);
          console.log(res);
        });
    }
  };

  return (
    <>
      <div className="bg-stone-100 flex flex-col h-max items-center">
        <h1 className="font-semibold text-2xl mt-12 mb-4">
          What would you like to upskill?
        </h1>
        <form onChange={onChangeHandler}>
          <input
            className="bg-white mb-8 px-6 rounded-xl w-[820px] h-[55px] shadow-2xl placeholder:font-thin placeholder:text-sm"
            type="text"
            placeholder="front end development, data visualization, blockchain"
          />
        </form>
        <div>
          <p className="p-2 font-md text-xs text-stone-400 text-right">
            {`Showing ${parseInt(page - 1) * 5 + 1}-${
              parseInt(page) * 5
            } of ${totalCourse}`}
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

            <CourseList
              courses={courses}
              isLoaded={isLoaded}
              onEnroll={onEnroll}
            />
          </div>
        </div>
        <PageSelector pageCount={totalPage} currentPage={parseInt(page)} />
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

const CourseList = (props) => {
  return (
    <div className="flex flex-col items-end">
      {props.isLoaded && (
        <>
          {props.courses === null && (
            <div className="w-[860px] h-[310px] text-black text-xl font-semibold flex items-center justify-center">
              No courses found!
            </div>
          )}

          {props.courses !== null &&
            props.courses.map((i) => (
              <CourseCard
                {...i}
                key={i.courseID}
                onEnroll={() => props.onEnroll(i.courseID)}
              />
            ))}
        </>
      )}
    </div>
  );
};
