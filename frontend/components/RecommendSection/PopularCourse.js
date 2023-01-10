export const PopularCourse = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 sm:grid-rows-2 mb-10 sm:mb-0">
      <div>
        <p className="text-lg md:text-base font-semibold text-stone-500 my-3 sm:text-center">
          Current Most Popular Course
        </p>
        <h1 className="text-4xl font-bold text-cyan-700 max-w-[20ch] sm:mx-auto sm:text-center">
          Abstract Data Structure and Algorithm (DSA)
        </h1>
      </div>
      {/* change this later */}
      <div className="flex ml-[50%] sm:mx-auto items-center">
        <button className="max-w-[200px] max-h-12 rounded-full bg-[#c3dce3] hover:bg-[#a8d8e5] px-5 py-2 text-cyan-700 text-xl lg:text-lg md:text-base font-bold">
          Enroll Now
        </button>
      </div>
    </div>
  );
};
