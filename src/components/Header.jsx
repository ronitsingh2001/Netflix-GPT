import { useNavigate } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  console.log(user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full flex px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img className="w-44" src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="flex items-center">
          <img
            className="w-8 h-8"
            src={
              user?.photoURL ??
              "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp"
            }
            alt=""
          />
          <button
            onClick={handleSignout}
            className="m-2 px-2 py-1 text-white font-semibold"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
