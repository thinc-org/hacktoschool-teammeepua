import { Button } from "../Button";

export const EditCourse = () => {
  return (
    <div className="px-[10%]">
      <img
        className="object-cover h-[280px] w-full rounded-b-xl"
        alt=""
        src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
      />

      <h1 className="text-cyan-700 tracking-widest font-bold text-xl py-5">
        5555555
      </h1>
      <form>
        <div class="mb-6">
          <label for="course-name" class="block mb-2 text-sm font-medium ">
            Course Name
          </label>
          <input
            id="course-name"
            class="border border-stone-300 text-sm rounded-lg block w-full p-2.5"
            placeholder="Enter your course name..."
            required
          />
        </div>
        <p>Instructor name</p>
        <div className="h-px w-full bg-stone-300 my-5"></div>

        <div class="mb-6">
          <label
            for="course-description"
            class="block mb-2 text-sm font-medium "
          >
            Course Description
          </label>
          <textarea
            id="course-description"
            class="border border-stone-300 text-sm rounded-lg block w-full px-2.5 pt-2.5 pb-10"
            placeholder="Enter your course description..."
            required
          ></textarea>
        </div>

        <p className="my-3">Course Categories</p>
        <div className="flex items-center justify-between mb-4 w-1/2">
          <div className="flex items-center">
            <input
              id="checkbox-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="checkbox-1"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Technology
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded "
            />
            <label
              for="checkbox-1"
              class="ml-2 text-sm font-medium text-gray-900 "
            >
              Computer Science
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="checkbox-1"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
            />
            <label
              for="checkbox-1"
              class="ml-2 text-sm font-medium text-gray-900"
            >
              Back-end
            </label>
          </div>
        </div>

        {/* text editor here */}

        <div className="my-12">
          <Button name="Save Changes" />
          <button className="text-stone-500 underline rounded-full px-5 py-2 text-lg hover:bg-stone-200 mx-6">Cancel</button>
          <button className="text-red-500 underline rounded-full px-5 py-2 text-lg hover:bg-red-200">Delete</button>
        </div>
      </form>
    </div>
  );
};
