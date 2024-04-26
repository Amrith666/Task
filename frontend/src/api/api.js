import axios from "axios";

export const getAllMovies = async () => {
  const res = await axios
    .get("http://localhost:7120/movie")
    .catch((err) => console.log(err));

    if(res.status !== 200){
        return console.log("No Data");
    }

    const data = await res.data;
    return data;
};


// export const getAllMovies = async () => {
//   try {
//     const res = await axios.get("http://localhost:7120/movie");
    
//     if (res.status !== 200) {
//       throw new Error("Failed to fetch data");
//     }

//     return res.data;
//   } catch (error) {
//     console.log("Error fetching movies:", error.message);
//     throw error;
//   }
// };