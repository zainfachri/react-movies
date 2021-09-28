import * as React from "react";
import {
  Box,
  Dialog,
  Grid,
  TextField,
  Button,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { Search as SearchIcon, ExitToApp } from "@mui/icons-material";

import { useGetMovies } from "../hooks/useGetMovies";

export const ListMovies = () => {
  const { movieList, searchMovies, handleSearch, showMovies } = useGetMovies();
  const [modalImage, setModalImage] = React.useState(false);
  const [indexView, setIndexView] = React.useState(0);

  const handleModal = (index) => {
    setIndexView(index);
    setModalImage(true);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TextField
        placeholder="Search Movies"
        variant="outlined"
        size="small"
        onChange={handleSearch}
        value={searchMovies}
        style={{ backgroundColor: "white", borderRadius: 4, marginBottom: 20 }}
        InputProps={{
          endAdornment: <SearchIcon />,
        }}
      />
      <Grid container spacing={4}>
        {showMovies()?.map((item, index) => (
          <Grid item key={index}>
            <ImageListItem key={item.img} style={{ height: 250, width: 160 }}>
              <img
                src={item.Poster}
                alt={item.Title}
                onClick={() => handleModal(index)}
              />
              <ImageListItemBar title={item.Title} subtitle={item.Year} />
              <Button
                fullWidth
                href={`/detail/${item.Title}/${item.Year}`}
                variant="contained"
                endIcon={<ExitToApp />}
                style={{ textTransform: "capitalize", marginTop: 5 }}
              >
                Detail Movie
              </Button>
            </ImageListItem>
          </Grid>
        ))}
      </Grid>
      <Dialog open={modalImage} onClose={() => setModalImage(false)}>
        <img
          src={movieList?.[indexView].Poster}
          alt={movieList?.[indexView].Title}
        />
      </Dialog>
    </Box>
  );
};
