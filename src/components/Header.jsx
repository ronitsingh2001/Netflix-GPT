import { LOGO_URL } from "../utils/constant";

const Header = () => {
  return (
    <div className="absolute  px-8 py-2 bg-gradient-to-b from-black rounded-md z-10">
      <img className="w-44" src={LOGO_URL} alt="Logo" />
    </div>
  );
};
export default Header;
