import { IMAGE_CDN } from "../utils/constant";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48 pr-4">
      <img className="w-full" src={IMAGE_CDN + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;
