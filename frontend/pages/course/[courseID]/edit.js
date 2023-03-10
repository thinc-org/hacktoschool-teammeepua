import { Button } from "../../../components/Button";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";

export default function App() {
  const [courseData, setCourseData] = useState();
  const { register, handleSubmit } = useForm();

  const router = useRouter();
  const { courseID } = router.query;

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`http://localhost:3100/api/course_content/${courseID}`)
        .then((res) => {
          setCourseData(res.data);
        });
    }
  }, [router]);

  const checkCategory = (label) => {
    return (
      courseData.categories !== null && courseData.categories.includes(label)
    );
  };

  const onSubmitHandler = (e) => {
    let categories = [];
    for (let i in e.categories) {
      if (e.categories[i] === true) categories.push(i);
    }
    console.log(editorRef.current.getContent())
    let message = {
      ...e,
      categories: categories,
      courseID: courseData.courseID,
      content: editorRef.current.getContent(),
    };

    axios
      .patch(
        `http://localhost:3100/api/course_content/${courseData.courseID}`,
        message
      )
      .then((res) => {
        router.push("/dashboard");
        console.log(res);
      });
  };

  console.log(courseData);

  if (courseData !== undefined)
    return (
      <div className="px-[10%]">
        <img
          className="object-cover h-[280px] w-full rounded-b-xl"
          alt=""
          src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
        />

        <h1 className="text-cyan-700 tracking-widest font-bold text-xl py-5">
          {courseData.courseID}
        </h1>
        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="mb-6">
            <label
              htmlFor="course-name"
              className="block mb-2 text-sm font-medium text-stone-500"
            >
              Course Name
            </label>
            <input
              id="course-name"
              className="border border-stone-300 text-sm rounded-lg block w-full p-2.5"
              placeholder="Enter your course name..."
              defaultValue={courseData.title}
              {...register("title", {
                required: true,
              })}
            />
          </div>
          <p className="text-stone-500">{courseData.instructorFullName}</p>
          <div className="h-px w-full bg-stone-300 my-5"></div>

          <div className="mb-6">
            <label
              htmlFor="course-description"
              className="block mb-2 text-sm font-medium text-stone-500"
            >
              Course Description
            </label>
            <textarea
              id="course-description"
              className="border border-stone-300 text-sm rounded-lg block w-full px-2.5 pt-2.5 pb-10"
              placeholder="Enter your course description..."
              defaultValue={courseData.description}
              {...register("description", {
                required: true,
              })}
            ></textarea>
          </div>

          <p className="my-3 text-stone-500">Course Categories</p>
          <div className="flex items-center justify-between mb-4 w-1/2">
            <div>
              <label className="ml-2 text-sm font-medium text-gray-900 ">
                <input
                  type="checkbox"
                  {...register("categories.Technology")}
                  defaultChecked={checkCategory("Technology")}
                  className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                Technology
              </label>
            </div>
            <div className="flex items-center">
              <label className="ml-2 text-sm font-medium text-gray-900 ">
                <input
                  type="checkbox"
                  {...register("categories.Computer Science")}
                  defaultChecked={checkCategory("Computer Science")}
                  className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
                />
                Computer Science
              </label>
            </div>
            <div className="flex items-center">
              <label className="ml-2 text-sm font-medium text-gray-900">
                <input
                  type="checkbox"
                  {...register("categories.Back-end")}
                  defaultChecked={checkCategory("Back-end")}
                  className="mr-2 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
                Back-end
              </label>
            </div>
          </div>

          <div className="my-6">
            <label
              htmlFor="course-photo-link"
              className="block mb-2 text-sm font-medium text-stone-500"
            >
              Course Photo Link
            </label>
            <input
              id="course-photo-link"
              className="border border-stone-300 text-sm rounded-lg block w-full p-2.5"
              placeholder="Ex. https://yourcourseimage.com/..."
              defaultValue={courseData.coverURL}
              {...register("coverURL", {
                required: true,
              })}
            />
          </div>
          <div className="w-full ">
            <Editor
              apiKey="tyd90e7cd7pitroji54zc5y2g2wm4w6ng3v5pjvz2in0ur87"
              onInit={(evt, editor) => (editorRef.current = editor)}
              initialValue={courseData.content}
              init={{
                selector: "textarea#basic-example",
                height: 500,
                plugins: [
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "help",
                  "wordcount",
                ],
                toolbar:
                  "undo redo | blocks | " +
                  "bold italic backcolor | alignleft aligncenter " +
                  "alignright alignjustify | bullist numlist outdent indent | " +
                  "removeformat | help",
                content_style:
                  "body { font-family:Helvetica,Arial,sans-serif; font-size:16px }",
              }}
            />
          </div>

          <div className="my-12">
            <Button>Save Changes</Button>
            <button className="text-stone-500 underline rounded-full px-5 py-2 text-lg hover:bg-stone-200 mx-6">
              Cancel
            </button>
            <button className="text-red-500 underline rounded-full px-5 py-2 text-lg hover:bg-red-200">
              Delete
            </button>
          </div>
        </form>
      </div>
    );
}
