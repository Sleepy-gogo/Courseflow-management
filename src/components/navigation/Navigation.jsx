import { Outlet, useNavigate } from "react-router-dom";
import { Container } from "../index";
import backgroundImage from "../../assets/egg_background.jpg";
import eggIcon from "../../assets/egg_icon.svg";
import useUserAuth from "../../hooks/useUserAuth";

function Navigation() {
  const { signOut, user } = useUserAuth();
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut();
    navigate("/login");
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-gradient-to-br from-cyan-400 to-blue-800 lg:h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav>
        <Container className="sticky flex justify-between w-full px-3 py-1 rounded-none sm:h-full h-14 sm:w-16 sm:fixed sm:py-10 sm:flex-col">
          <img
            src={eggIcon}
            alt="Egg icon"
            className="h-full sm:h-fit sm:w-full aspect-square"
          />
          <button
            className="overflow-hidden bg-blue-100 rounded-full aspect-square sm:w-full"
            onClick={handleSignOut}
          >
            <img src={user.avatar_url} alt="" />
          </button>
        </Container>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navigation;
