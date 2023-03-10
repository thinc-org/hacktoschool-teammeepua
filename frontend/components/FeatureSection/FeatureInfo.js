import { FeatureActiveUser } from "./FeatureActiveUser";

export const FeatureInfo = () => {
  return (
    <div>
      <h1 className="text-5xl lg:text-3xl sm:text-center font-bold max-w-[14ch] sm:mx-auto tracking-tight">
        Learn a programming language in a playful way
      </h1>
      <p className="text-lg lg:text-base sm:text-center font-semibold my-8 text-stone-500 tracking-tight">
        Make coding more fun with mini-games and challenges
      </p>
      <FeatureActiveUser />
    </div>
  );
};
