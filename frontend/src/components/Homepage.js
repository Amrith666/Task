import React,{useEffect,useState} from "react";
import { Box, Typography,Button } from "@mui/material";
import Movieitem from "./Movies/Movieitem";
import { Link } from "react-router-dom";
import { getAllMovies } from "../api/api";

const Homepage = () => {
    const [movies,setMovies]=useState([]);
    useEffect(() => {
        getAllMovies()
          .then(data => setMovies(data.movies))
          .catch(err => console.log(err));
      }, []); 
  return (
    <Box width={"100%"} height="100%" margin="auto" marginTop={2}>
      <Box margin={"auto"} width="80%" height={"50vh"} padding={2}>
        <img
          src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/11/29121807/Animal-movie-location-2-1600x900.jpg"
          alt="animal"
          width={"100%"}
          height={"100%"}
        ></img>
      </Box>
      <Box padding={5} margin={"auto"}>
    <Typography variant="h4" textAlign={"center"}>Latest movies</Typography>
      </Box>
<Box 
  display={"flex"}
  width={"80%"}
  justifyContent={"center"}
  flexWrap={"wrap"}
  margin={"auto"}
>
  {movies && movies.map((movie, index) => (
    <Movieitem 
      key={index}
      id={movie.id}
      title={movie.title}
      posterUrl={movie.posterUrl}
      releaseDate={movie.releaseDate}
    />
  ))}
</Box>

      <Box display={"flex"} padding={5} margin={"auto"}>
        <Button LinkComponent={Link} to="/movies" variant="outlined" sx={{margin:"auto", color:"#2b2d42"}}>View All Movies</Button>
      </Box>
    </Box>
  );
};

export default Homepage;
