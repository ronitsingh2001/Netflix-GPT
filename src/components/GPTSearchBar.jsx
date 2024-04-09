import { useSelector } from "react-redux";
import lang from "../utils/language";
import { useRef } from "react";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const selectedLang = useSelector((store) => store?.config?.lang);
  const search = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(search.current.value);
    const query =
      "Act as a Movie Recommendation System and suggest some movies for query " +
      search.current.value + '. Onli give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya.';
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });
    console.log(chatCompletion.choices[0].message.content);
  };

  return (
    <div className="pt-[6%] flex justify-center">
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-1/2  bg-black grid grid-cols-12 rounded-md"
      >
        <input
          ref={search}
          className="p-4 m-4 col-span-9 rounded-md"
          type="text"
          placeholder={lang?.[selectedLang]?.placeholder}
        />
        <button
          onClick={handleClick}
          className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-md"
        >
          {lang?.[selectedLang]?.search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
