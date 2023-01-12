export const Button = (props) => {
  return (
    <button
      className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-lg font-bold"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
