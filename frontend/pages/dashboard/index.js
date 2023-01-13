import { Footer } from "../../components/Footer/Footer";
import { CourseCard } from "../../components/Dashboard/CourseCard";
import { useSelector } from "react-redux";
import { ProfilePane } from "../../components/Dashboard/ProfilePane";
import { useEffect, useRef, useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import { CourseStudent } from "../../components/Dashboard/CourseStudent";
import axios from "axios";

export default function () {
  const [isCreateNewCourse, setCreateNewCourse] = useState(false);
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

      {courseIndex >= 0 && (
        <CourseStudent
          {...data.listCourse[courseIndex]}
          onCloseCourseStudent={() => setCourseIndex(-1)}
        />
      )}

      {isCreateNewCourse && (
        <CreateNewCourseModal
          onCancel={() => setCreateNewCourse(false)}
          ID={data.ID}
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
              <button
                className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-4 text-white text-base font-bold"
                onClick={() => setCreateNewCourse(true)}
              >
                Create New Course +
              </button>
            </div>
          )}

          <div className="flex flex-col items-end">
            {data.listCourse === undefined && (
              <div className="w-[682px] h-[310px] text-black text-xl font-semibold flex items-center justify-center">
                No courses found!
              </div>
            )}

            {data.listCourse !== undefined &&
              data.listCourse.map((i, j) => (
                <CourseCard
                  {...i}
                  key={i.courseID}
                  onShowCourseStudent={() => setCourseIndex(j)}
                />
              ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

const CreateNewCourseModal = (props) => {
  const textfield = useRef();

  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative rounded-md bg-white w-[400px] h-[175px] p-4">
        <p className="h-max">
          Create New Course
          <input
            type="text"
            className="border rounded-lg w-full h-12 mt-2 px-2"
            ref={textfield}
          />
        </p>
        <div className="absolute bottom-4 right-0 w-full bg-white text-right">
          <button
            className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-sm font-semibold mr-4"
            onClick={() => {
              axios
                .post("http://localhost:3100/api/create_course", {
                  courseTitle: textfield.current.value,
                  userID: props.ID,
                })
                .then((res) => {
                  props.onCancel();
                });
            }}
          >
            Create Course
          </button>
          <button
            className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-sm font-semibold mr-4"
            onClick={props.onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
