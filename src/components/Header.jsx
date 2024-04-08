import { useNavigate } from "react-router-dom";
import { AVATAR, LOGO_URL } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // will be called when component unsubscribe
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute w-full flex px-8 py-2 bg-gradient-to-b from-black z-10 justify-between">
      <img className="w-44" src={LOGO_URL} alt="Logo" />
      {user && (
        <div className="flex items-center">
          <img className="w-8 h-8" src={user?.photoURL ?? AVATAR} alt="" />
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
