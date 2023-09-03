import { Outlet, useNavigate } from "react-router-dom";
import Container from "../Container";
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
      className="bg-gradient-to-br from-cyan-400 to-blue-800 min-h-screen flex flex-col lg:h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <nav>
        <Container className="sm:h-full h-14 sm:w-16 w-full rounded-none sticky sm:fixed py-1 sm:py-10 px-3 flex justify-between sm:flex-col">
          <img
            src={eggIcon}
            alt="Egg icon"
            className="h-full sm:h-fit sm:w-full aspect-square"
          />
          <button
            className="rounded-full overflow-hidden bg-blue-100 aspect-square sm:w-full"
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
