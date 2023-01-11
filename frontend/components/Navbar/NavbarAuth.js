import { useRouter } from "next/router";

export const NavbarAuth = () => {
  const router = useRouter();

  return (
    <div className="flex">
      {/* Change this later */}
      <button className="text-base mx-6" onClick={() => router.push("/signup")}>
        Sign Up
      </button>
      <button className="text-base" onClick={() => router.push("/login")}>
        Log In
      </button>
    </div>
  );
};
