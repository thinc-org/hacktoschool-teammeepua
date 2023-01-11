export const RecommendCard = (props) => {
  return (
    <div className="flex flex-col items-center justify-between h-[160px] sm:h-[140px] w-[30%] sm:w-[50%] sm:min-w-[250px] sm:my-5 p-5 bg-stone-100 rounded-2xl shadow-lg hover:scale-105 hover:shadow- transition">
      <h2 className="text-2xl lg:text-xl sm:text-base font-bold text-cyan-700 sm:text-center">
        {props.name}
      </h2>
      <div className="underline text-stone-500 sm:text-center flex items-center group">
        <a className="text-lg md:text-base sm:text-sm" href="#">
          Enroll
        </a>

        <svg
          className="scale-[.40] relative right-2 translate-x-0 group-hover:translate-x-2 transition-transform"
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          width="48"
        >
          <path d="m35.1 32.95-2.15-2.1 5.3-5.3H6v-3h32.3l-5.3-5.3 2.1-2.1 8.9 8.9Z" />
        </svg>
      </div>
    </div>
  );
};
