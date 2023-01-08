import { FooterList } from "./FooterList";
import { FooterIcon } from "./FooterIcon";
import { FooterCopyright } from "./FooterCopyright";

export const Footer = () => {
  return (
    <footer className="h-40 px-40 py-8 bg-stone-100 font-semibold text-stone-500">
      <div className="flex justify-between ">
        <FooterList />

        <div className="flex ">
          <FooterIcon
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6NvsdaRO0-xTinu151_r5aZ0_mxjfgCnJ7XNwjC9csTxRS3pw9aZNZ-5gtcFHabv29Y&usqp=CAU"
            name="Cleverse"
            href="#"
          />
          <FooterIcon
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd6NvsdaRO0-xTinu151_r5aZ0_mxjfgCnJ7XNwjC9csTxRS3pw9aZNZ-5gtcFHabv29Y&usqp=CAU"
            name="Thinc."
            href="#"
          />
        </div>
      </div>

      {/* grey line */}
      <div className="h-px bg-stone-300 my-2"></div>

      <FooterCopyright />
    </footer>
  );
};
