import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0()

  return (
    <Button
      variant="ghost"
      className="font-bold text-xl hover:text-orange-500 hover:bg-white transition-all"
      onClick={async () => await loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default MainNav;
