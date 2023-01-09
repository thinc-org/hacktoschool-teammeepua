import Image from "next/image";

export const Banner = () => {
  return (
    <div className="px-40 py-32 bg-stone-100">
      <div className="grid grid-cols-2 gap-20">
        <div>
          <p className="text-base uppercase text-cyan-700 font-bold">
            E-course platform
          </p>
          <h1 className="text-6xl font-bold leading-tight pt-6 pb-8">
            Learning and teaching online, made easy.
          </h1>
          <p className="text-lg font-semibold text-stone-500 leading-normal max-w-[35ch] pb-8">
            Practice your programming skills and learn new things with the
            platform.
          </p>
          {/* Change this later */}
          <button className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-lg font-bold">
            Browse Course
          </button>
        </div>
        <img src="https://images.all-free-download.com/images/graphiclarge/500_in_cash_210309.jpg" />
      </div>
    </div>
  );
};
