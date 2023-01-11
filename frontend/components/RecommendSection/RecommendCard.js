export const RecommendCard = (props) => {
  return (
    <div className="flex flex-col justify-between h-[160px] sm:h-[140px] max-w-[450px] w-[30%] sm:max-w-[80%] sm:w-[400px] sm:my-5 p-5 bg-stone-100 rounded-2xl shadow-lg hover:scale-105 hover:shadow- transition">
      <h2 className="text-2xl lg:text-xl sm:text-base font-bold text-cyan-700 sm:text-center">
        {props.name}
      </h2>
      <div className="underline text-stone-500 sm:text-center">
        <a className="text-lg md:text-base sm:text-sm" href="#">
          Enroll
        </a>
        {/* insert icon here */}
      </div>
    </div>
  );
};
