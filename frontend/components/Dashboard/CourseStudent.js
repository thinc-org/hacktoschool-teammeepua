import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../Button";

export const CourseStudent = (props) => {
  const [studentLists, setStudentLists] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3100/api/get_student_list/${props.courseID}`)
      .then((res) => {
        setStudentLists(res.data.studentList);
      });
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen
      bg-black bg-opacity-75 flex justify-center z-50"
    >
      <div className="relative rounded-md bg-white w-[682px] h-[80%] p-4 mt-12">
        <h1 className="font-bold text-3xl text-stone-500 mb-2">
          {props.title}
        </h1>
        <div className="text-sm mb-2">
          <span className="font-bold tracking-widest text-cyan-700 mr-4">
            {props.courseID}
          </span>
          <span className="font-semibold">{props.instructorFullName}</span>
        </div>
        <div className="text-stone-400 font-medium text-xs relative flex flex-row gap-3 mb-3">
          {props.categories !== null &&
            props.categories.map((e) => <span key={e}>{e}</span>)}
        </div>

        <h2 className="font-semibold text-xl text-stone-500 pt-5">
          Student List
        </h2>
        {/* Table here */}

        <div class="relative overflow-x-auto h-[60%] overflow-scroll my-6 ">
          <table class="w-full text-sm text-left text-gray-500">
            <thead class="text-xs text-gray-700 uppercase bg-stone-100">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Fullname
                </th>
                <th scope="col" class="px-6 py-3">
                  Student ID
                </th>
              </tr>
            </thead>
            <tbody>
              {studentLists !== null &&
                studentLists.map((i) => (
                  <StudentRow {...i} key={i.studentID} />
                ))}
            </tbody>
          </table>
        </div>

        {/* fixed button */}
        <Button onClick={props.onCloseCourseStudent}>Close</Button>
      </div>
    </div>
  );
};

const StudentRow = (props) => {
  return (
    <tr class="border-b ">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {props.studentFullName}
      </th>
      <td class="px-6 py-4">{props.studentID}</td>
    </tr>
  );
};
