import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="bg-black">
      <div className="-mt-32 pl-12 relative z-10">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} />
        <MovieList
          title={"Netflix Originals"}
          movies={movies?.nowPlayingMovies}
        />
        {/* 
            
            MovieList - Popular
            - Cards * n
            MovieList - Now Playing
            MovieList - Trending
            MovieList - Horror
            
        */}
      </div>
    </div>
  );
};
export default SecondaryContainer;
