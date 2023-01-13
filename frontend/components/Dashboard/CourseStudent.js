export const CourseStudent = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen
      bg-black bg-opacity-75 flex justify-center z-50"
    >
      <div className="relative rounded-md bg-white w-[682px] h-max p-4 mt-12">
        <h1 className="font-bold text-xl text-stone-500 mb-2">{props.name}</h1>
        <div className="text-sm mb-2">
          <span className="font-bold tracking-widest text-cyan-700 mr-4">
            {props.id}
          </span>
          <span className="font-semibold">{props.instructor}</span>
        </div>
        <div className="text-stone-400 font-medium text-xs relative flex flex-row gap-3 mb-3">
          {props.tags.map((e) => (
            <span key={e}>{e}</span>
          ))}
        </div>

        <h2 className="font-semibold text-xl text-stone-500">Student List</h2>
        {/* Table here */}
      </div>
    </div>
  );
};
