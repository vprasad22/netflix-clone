import React, {useState, useEffect} from 'react';
import './Row.css'
import axios from './axios';
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row( {title, fetchUrl, isLargeRow} ) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] =useState("");
  
  
  //runs when row appears on screren by making a db request 
  useEffect(() => {
    //
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        //console.log(request.data.results);
        setMovies(request.data.results);
        return request;
    }
    fetchData();
  }, [fetchUrl]);

 
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    }
    else {
      movieTrailer(movie?.name || "")
      .then((url)=> {
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((error) => console.log(error));
    }
  }

  const opts = {

    width: "100%",
    height: "450",
    marginLeft: "50",
    marginRight: "-50",
    playerVars: {
      autoplay: 1,
    },
    
  };

 
  //console.log(movies);

  return (
    <div className="row">
        <h2 style = {{marginLeft: "30px", marginTop: "20px"}}>{title}</h2>
        <div className="row_posters">
            
            {movies.map((movie) =>(
                <img 
                key = {movie.id}
                onClick = {() => handleClick(movie)}
                className = {`row_poster ${isLargeRow && "row_posterLarge"}`}
                 src ={`${base_url}${isLargeRow ? movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
                 
            ) )}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;