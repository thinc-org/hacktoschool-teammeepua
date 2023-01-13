import { useSelector } from "react-redux";
import { useRouter } from "next/router";

export const useAuth = () => {
  const { data } = useSelector((state) => state.user);
  const router = useRouter();

  const needsLogIn = () => {
    router.push("/login");
    return { data: {} };
  };

  const loggedIn = () => {
    return { data };
  };

  return { checkAuth: data.isLoggedIn ? loggedIn : needsLogIn };
};
