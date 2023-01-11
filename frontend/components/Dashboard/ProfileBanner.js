export default function (props) {
  return (
    <div className="flex flex-row items-center mb-4">
      <div
        className="w-[100px] h-[100px] rounded-full flex items-center justify-center 
      font-bold text-5xl bg-[#c3dce3] text-cyan-700"
      >
        {props.name.substring(0, 1)}
      </div>
      <div className="ml-4">
        <h1 className="font-semibold text-xl">Welcome back,</h1>
        <span className="font-bold text-4xl">{props.name}!</span>
      </div>
    </div>
  );
}
