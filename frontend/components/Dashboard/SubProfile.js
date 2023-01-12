export const SubProfile = (props) => {
  return (
    <div className="text-stone-500">
      <h1 className="font-semibold text-xl">{props.label}</h1>
      <p className="font-medium text-base">{props.children}</p>
    </div>
  );
};
