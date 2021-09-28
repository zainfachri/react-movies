import * as React from "react";
import {
  Button,
  CircularProgress,
  Container,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

import { useGetDetailMovie } from "../hooks/useGetDetailMovie";

export const DetailScreen = () => {
  const { movieDetail } = useGetDetailMovie();

  return (
    <>
      {!movieDetail ? (
        <p>Loading...</p>
      ) : (
        <Container style={{ paddingTop: 50, paddingBottom: 200 }}>
          <Grid container spacing={2}>
            <Grid item>
              <img src={movieDetail?.Poster} />
            </Grid>
            <Grid item sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography
                    gutterBottom
                    style={{
                      color: "silver",
                      fontWeight: "bold",
                      fontSize: 24,
                    }}
                    component="div"
                  >
                    {`${movieDetail?.Title} (${movieDetail?.Year})`}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "silver",
                      fontWeight: "bold",
                      marginTop: 40,
                    }}
                    gutterBottom
                  >
                    {movieDetail?.Genre}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ color: "silver", marginTop: 10 }}
                  >
                    Writers : {movieDetail?.Writer}
                  </Typography>
                  <Typography variant="body2" style={{ color: "silver" }}>
                    Actors : {movieDetail?.Actors}
                  </Typography>
                  <Typography variant="body2" style={{ color: "silver" }}>
                    Duration : {movieDetail?.Runtime}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ marginTop: 20, color: "silver" }}
                  >
                    <span style={{ fontWeight: "bold" }}>Synopsis :</span>{" "}
                    <br />
                    {movieDetail?.Plot}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{ color: "silver", fontSize: 18 }}
                  >
                    Rating: {movieDetail?.imdbRating}
                  </Typography>
                  <Rating
                    name="read-only"
                    precision={0.5}
                    max={10}
                    value={Number(movieDetail?.imdbRating)}
                    readOnly
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Button
            variant="contained"
            href="/"
            startIcon={<ArrowBackIosIcon />}
            style={{ textTransform: "capitalize", marginTop: 10 }}
          >
            Back to Home
          </Button>
        </Container>
      )}
    </>
  );
};
