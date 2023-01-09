export const CourseCard = (props) => {
  return (
    <div className="flex flex-col justify-between h-[140px] w-[330px] p-5 bg-stone-100 rounded-2xl shadow-lg hover:scale-105 hover:shadow- transition">
      <h2 className="text-xl font-bold text-cyan-700">{props.name}</h2>
      <div className="underline text-stone-500">
        <a href="#">Enroll</a>
        {/* insert icon here */}
      </div>
    </div>
  );
};
