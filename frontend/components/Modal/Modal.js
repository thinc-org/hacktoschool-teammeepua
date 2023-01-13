export const Modal = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-screen h-screen
     bg-black bg-opacity-75 flex items-center justify-center z-50"
    >
      <div className="relative rounded-md bg-white w-[400px] h-[175px] p-4">
        <p className="h-max">{props.children}</p>
        <div className="absolute bottom-4 right-0 w-full bg-white text-right">
          <button
            className="rounded-full bg-cyan-700 hover:bg-cyan-900 px-5 py-2 text-white text-sm font-semibold mr-4"
            onClick={props.onClick}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};
