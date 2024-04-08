import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      
        MainContainer
          - VideoBg
          - VideoTitle
        SecondaryContainer
          - MovieList * n
            - Cards * n

      */}
    </>
  );
};
export default Browse;
