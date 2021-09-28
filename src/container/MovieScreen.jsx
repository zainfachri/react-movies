import * as React from "react";
import { Box, Container } from "@mui/material";

import { ListMovies } from "../components";

export const MovieScreen = () => {
  return (
    <>
      <Container>
        <Box style={{ marginTop: 50, paddingBottom: 100 }}>
          <ListMovies />
        </Box>
      </Container>
    </>
  );
};
