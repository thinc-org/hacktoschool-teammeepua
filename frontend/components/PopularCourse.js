export const PopularCourse = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <p className="text-lg font-semibold text-stone-500 my-3">
          Current Most Popular Course
        </p>
        <h1 className="text-3xl font-bold text-cyan-700">
          Abstract Data Structure and Algorithm (DSA)
        </h1>
      </div>
      {/* change this later */}
      <div className="flex ml-[50%] items-center">
        <button className="max-w-[200px] max-h-12 rounded-full bg-[#c3dce3] hover:bg-[#a8d8e5] px-5 py-2 text-cyan-700 text-2xl font-bold">
          Enroll Now
        </button>
      </div>
    </div>
  );
};
