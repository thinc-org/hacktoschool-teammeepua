import Link from "next/link";

export const SubProfileLink = (props) => {
  return (
    <Link href={props.href} className="underline" target="_blank">
      {props.label}
    </Link>
  );
};
