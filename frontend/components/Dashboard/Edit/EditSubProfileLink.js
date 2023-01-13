export const EditSubProfileLink = (props) => {
  return (
    <div className="text-stone-500 mb-4">
      <h1 className="font-medium text-sm mb-2">{props.header}</h1>
      <input
        {...props.register(props.name)}
        type={props.type}
        placeholder={props.placeholder}
        defaultValue={props.placeholder}
        className={`
          border rounded-lg w-[300px] h-12
          placeholder: text-sm placeholder: font-normal placeholder: px-3
          ${props.error[props.name] && "border-red-600 border-2"}
        `}
      />
    </div>
  );
};
