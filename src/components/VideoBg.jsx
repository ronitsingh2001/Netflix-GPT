import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies);
  useMovieTrailer(movieId);

  return (
    <div className="w-full h-[100vh] overflow-hidden">
      <iframe
      className="w-full aspect-video h-[100vh] scale-y-[1.35] scale-x-[1.17]"
        src={"https://www.youtube.com/embed/" + trailerVideo?.trailer?.key +"?&autoplay=1&mute=1&controls=0&loop=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  );
};

export default VideoBg;
