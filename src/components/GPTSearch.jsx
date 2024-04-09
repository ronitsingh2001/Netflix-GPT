import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestion from "./GPTSuggestion";
import { BG_URL } from "../utils/constant";

const GPTSearch = () => {
  return (
    <div className="">
       <div className="absolute -z-10">
        <div className="absolute w-full h-full bg-[rgba(0,0,0,0.5)] "></div>
        <img src={BG_URL} alt="Background" />
      </div>
      <GPTSearchBar />
      <GPTSuggestion />
    </div>
  );
};
export default GPTSearch;
