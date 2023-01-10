import Image from "next/image";

export const FooterIcon = (props) => {
  return (
    <div className="flex mx-4 text-sm">
      <a href={props.href}>
        <Image className="w-6 h-6" src={props.src} />
      </a>
      <p className="mx-2">
        <a href={props.href}>{props.name}</a>
      </p>
    </div>
  );
};
