import * as React from "react";
import axios from "axios";

export const useGetMovies = () => {
  const [movieList, setMovieList] = React.useState();
  const [searchMovies, setSearchMovies] = React.useState("");

  React.useEffect(() => {
    const getDataMovie = async () => {
      try {
        const getMovies = await axios.get(
          "http://www.omdbapi.com/?apikey=ba09b1b7&s=marvel"
        );
        setMovieList(getMovies.data.Search);
      } catch (error) {
        console.log(error);
      }
    };
    getDataMovie();
  }, []);

  const handleSearch = async (e) => {
    setSearchMovies(e.target.value);
  };

  const showMovies = () => {
    if (!searchMovies) {
      return movieList;
    }

    return movieList.filter((item) => {
      return item.Title.toLowerCase().includes(searchMovies.toLowerCase());
    });
  };

  return {
    movieList,
    searchMovies,
    handleSearch,
    showMovies,
  };
};
