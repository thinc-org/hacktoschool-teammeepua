export const FooterIcon = (props) => {
  return (
    <div className="flex mx-4 text-sm">
      <a href={props.href}>
        <img className="w-6 h-6" src={props.src} />
      </a>
      <p className="mx-2">
        <a href={props.href}>{props.name}</a>
      </p>
    </div>
  );
};
