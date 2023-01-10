import Image from "next/image";

export const FooterIcon = (props) => {
  return (
    <div className="flex mx-4 text-sm">
      <a href={props.href}>
        <Image width={24} height={24} src={props.src} />
      </a>
      <p className="mx-2">
        <a href={props.href}>{props.name}</a>
      </p>
    </div>
  );
};
