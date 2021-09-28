import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
  Autocomplete,
  TextField,
} from "@mui/material";

import "./App.css";
import { DetailScreen, MovieScreen } from "./container";

import { useGetMovies } from "./hooks/useGetMovies";
const App = () => {
  const { movieList } = useGetMovies();

  return (
    <div style={{ backgroundColor: "#2D2D2D" }}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <a href="/" style={{ textDecoration: "none", color: "white" }}>
                MOVIES - REACTAPP
              </a>
            </Typography>
            <Autocomplete
              sx={{ width: 300 }}
              options={movieList ? movieList : ["No Movies Found"]}
              getOptionLabel={(option) => option.Title + "-" + option.Year}
              renderInput={(params) => (
                <TextField
                  {...params}
                  freeSolo
                  placeholder="Search Movies"
                  size="small"
                  style={{ backgroundColor: "white", borderRadius: 4 }}
                />
              )}
              renderOption={(props, option) => {
                return (
                  <Grid container spacing={2}>
                    <Grid item>
                      <img
                        alt={option.Title}
                        src={option.Poster}
                        width="70px"
                        height="100px"
                        style={{ paddingLeft: 10 }}
                      />
                    </Grid>
                    <Grid item xs={12} sm container>
                      <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                            style={{ cursor: "pointer" }}
                          >
                            <a
                              href={`/detail/${option.Title}/${option.Year}`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              {option.Title.substring(0, 17)}...
                            </a>
                          </Typography>
                          <Typography variant="body2" gutterBottom>
                            {option.Year}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                );
              }}
            />
          </Toolbar>
        </AppBar>
      </Box>
      <Router>
        <Switch>
          <Route exact path="/">
            <MovieScreen />;
          </Route>
          <Route exact path="/detail/:movieName/:year">
            <DetailScreen />;
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
