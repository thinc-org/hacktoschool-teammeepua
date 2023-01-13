import { Footer } from "../../components/Footer/Footer";
import { CourseCard } from "../../components/Dashboard/CourseCard";
import { useSelector } from "react-redux";
import { ProfilePane } from "../../components/Dashboard/ProfilePane";
import { useEffect, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { CourseStudent } from "../../components/Dashboard/CourseStudent";
import axios from "axios";

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
  const [courseIndex, setCourseIndex] = useState(-1);

  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.isLoggedIn) {
      let session = JSON.parse(localStorage.getItem("session"));

      if (
        session !== null &&
        session.ID !== undefined &&
        new Date(session.expired) > new Date()
      ) {
        axios
          .post("http://localhost:3100/api/userinfo", {
            userID: parseInt(session.ID),
          })
          .then((res) => {
            console.log(res.data);
            dispatch(login({ ...res.data, ID: session.ID }));
            router.push("/dashboard");
          })
          .catch((err) => console.log(err));
      }
    }
  }, []);

  return (
    <>
      {!data.isLoggedIn && (
        <Modal onClick={() => router.push("/login")}>
          Please login to continue
        </Modal>
      )}

      {courseIndex > 0 && (
        <CourseStudent
          {...dummyData[courseIndex]}
          onCloseCourseStudent={() => setCourseIndex(-1)}
        />
      )}

      <div className="bg-stone-100 w-screen flex flex-row justify-center pt-8">
        <ProfilePane data={data} />

        {/* Vertical line */}
        <div className="border-l-2 border-solid border-stone-300" />

        <div className="pt-4 px-10">
          {data.role === "student" && (
            <>
              <h1 className="font-semibold text-2xl mb-8">
                Here are all the courses you are taking
              </h1>
            </>
          )}

          {data.role === "instructor" && (
            <div className="mb-4">
              <h1 className="font-semibold text-2xl mb-2">
                Here are all the courses you are managing
              </h1>
              <button className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-4 text-white text-base font-bold">
                Create New Course +
              </button>
            </div>
          )}

          <div className="flex flex-col items-end">
            {courses.map((i) => (
              <CourseCard
                {...dummyData[i]}
                id={i}
                key={i}
                onShowCourseStudent={() => setCourseIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
