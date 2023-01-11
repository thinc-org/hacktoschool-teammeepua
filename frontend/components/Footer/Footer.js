import { FooterList } from "./FooterList";
import { FooterIcon } from "./FooterIcon";
import { FooterCopyright } from "./FooterCopyright";

import CleverseLogo from "../../public/cleverse-logo.png";
import ThincLogo from "../../public/thinc-logo.png";

export const Footer = () => {
  return (
    <footer className="px-[10%] lg:px-20 md:px-10 sm:px-4 py-8 bg-stone-100 font-semibold text-stone-500">
      <div className="flex justify-between md:justify-around">
        <FooterList />

        <div className="flex lg:flex-col lg:relative top-[-8px]">
          <FooterIcon
            src={CleverseLogo}
            name="Cleverse"
            href="https://cleverse.com/"
          />
          <FooterIcon
            src={ThincLogo}
            name="Thinc."
            href="https://thinc.in.th/"
          />
        </div>
      </div>

      {/* grey line */}
      <div className="h-px bg-stone-300 my-2"></div>

      <FooterCopyright />
    </footer>
  );
};
