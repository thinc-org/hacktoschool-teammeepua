import { Editor } from "@tinymce/tinymce-react";
import { useRouter } from "next/router";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

export default function App() {
  const [courseData, setCourseData] = useState();

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  const router = useRouter();
  const { courseID } = router.query;

  useEffect(() => {
    if (router.isReady) {
      axios
        .get(`http://localhost:3100/api/course_content/${courseID}`)
        .then((res) => {
          setCourseData(res.data);
        });
    }
  }, [router]);

  return (
    <div className="px-[10%]">
      <img
        className="object-cover h-[280px] w-full rounded-b-xl"
        alt=""
        src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
      />

      <h1 className="text-cyan-700 tracking-widest font-bold text-xl mt-5">
        {courseData?.courseID}
      </h1>
      <div>
        <h1 className="text-5xl mt-0 mb-3">{courseData?.title}</h1>

        <p className="text-stone-500">{courseData?.instructorFullName}</p>
        <div className="h-px w-full bg-stone-300 my-5"></div>

        <div dangerouslySetInnerHTML={{ __html: courseData?.content }} />
        {/* <div className="w-full ">
          <Editor
            apiKey="tyd90e7cd7pitroji54zc5y2g2wm4w6ng3v5pjvz2in0ur87"
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={courseData?.content}
            init={{
              theme: "advanced",
              readonly: 1,
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
        </div> */}
      </div>
    </div>
  );
}
