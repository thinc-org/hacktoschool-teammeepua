export const NavbarHam = (props) => {
  return (
    <div
      class="space-y-1.5 hidden lg:block cursor-pointer z-10"
      onClick={props.onClick}
    >
      <span class="block w-8 h-0.5 bg-black"></span>
      <span class="block w-5 h-0.5 bg-black"></span>
      <span class="block w-3 h-0.5 bg-black"></span>
    </div>
  );
};
