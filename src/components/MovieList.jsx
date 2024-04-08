import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 ">
      <h1 className="text-3xl font-semibold p-4 text-white">{title}</h1>
      <div className="flex overflow-y-scroll">
        <div className="flex">
          {movies?.map((m) => (
            <MovieCard key={m.id} posterPath={m?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
