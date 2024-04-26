import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Autocomplete,
  TextField,
  Tabs,
  Tab,
} from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import Box from "@mui/material/Box";
import { getAllMovies } from "../api/api";
import { Link } from "react-router-dom";
import Movieitem from "./Movies/Movieitem"; // Import Movieitem component

const Header = () => {
  const [value, setValue] = useState(0);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((data) => setMovies(data.movies))
      .catch((err) => console.log(err));
  }, []);

  const movieItems = movies.map((movie) => (
    <Movieitem
      key={movie.id}
      id={movie.id}
      title={movie.title}
      posterUrl={movie.posterUrl}
      releaseDate={movie.releaseDate}
    />
  ));

  return (
    <div>
      <AppBar position="sticky" sx={{ bgcolor: "#2b2d42" }}>
        <Toolbar>
          <Box width={"20%"}>
            <MovieIcon />
          </Box>
          <Box width={"30%"} margin={"auto"}>
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              options={movies.map((movie) => movie.title)}
              renderInput={(params) => (
                <TextField
                  sx={{ input: { color: "white" } }}
                  {...params}
                  placeholder="Search Movies"
                />
              )}
            />
          </Box>
          <Box display={"flex"}>
            <Tabs
              textColor="inherit"
              indicatorColor="secondary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab LinkComponent={Link} to="/movies" label="Movies" />
              <Tab LinkComponent={Link} to="/admin" label="Admin" />
              <Tab LinkComponent={Link} to="/auth" label="Auth" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
