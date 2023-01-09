export const FeatureSection = () => {
  return (
    <section className="grid grid-cols-2 gap-x-40 h-[600px] px-40 py-28 bg-stone-100">
      {/* Change this later */}
      <img src="https://images.all-free-download.com/images/graphiclarge/500_in_cash_210309.jpg" />
      <div>
        <h1 className="text-5xl font-bold">
          Learn a language in a playful way
        </h1>
        <p className="text-lg font-semibold my-8 text-stone-500">
          Make learning words more fun with mini-games
        </p>
        <div className="flex">
          <div>
            {/* Change this later */}
            <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48">
              <path d="M19.95 42 22 27.9h-7.3q-.55 0-.8-.5t0-.95L26.15 6h2.05l-2.05 14.05h7.2q.55 0 .825.5.275.5.025.95L22 42Z" />
            </svg>
          </div>
          <p className="text-4xl font-bold">600</p>
        </div>
        <p className="text-stone-500 text-base font-semibold">Active Users</p>
      </div>
    </section>
  );
};
