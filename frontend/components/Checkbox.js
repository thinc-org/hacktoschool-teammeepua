import { useState } from "react";

export const Checkbox = (props) => {
  const [isChecked, setChecked] = useState(false);

  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="appearance-none"
        onChange={() => {
          setChecked(!isChecked);
          if (props.onChange !== undefined)
            props.onChange({ label: props.label, value: !isChecked });
        }}
      />
      <svg
        className="inline-block w-5 h-5 border-2 rounded-sm border-stone-500 text-stone-500 mr-3"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
      >
        <path
          className={isChecked ? "" : "hidden"}
          d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z"
          strokeWidth="4"
          stroke="currentColor"
        />
      </svg>
      {props.label}
    </label>
  );
};
