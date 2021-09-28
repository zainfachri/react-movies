import * as React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const useGetDetailMovie = () => {
  const { movieName, year } = useParams();
  const [movieDetail, setMovieDetail] = React.useState();

  const separateName = movieName.split(" ").join("+");
  const urlMovie = separateName.split(":").join("%3A");

  React.useEffect(() => {
    const getDetailMovie = async () => {
      try {
        const getDetailMovie = await axios.get(
          `http://www.omdbapi.com/?apikey=ba09b1b7&t=${urlMovie}&y=${year}&plot=full`
        );
        setMovieDetail(getDetailMovie?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getDetailMovie();
  }, []);

  return {
    movieDetail,
  };
};
