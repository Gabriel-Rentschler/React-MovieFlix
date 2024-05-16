import { useEffect, useState } from 'react';
import SearchIcon from '../resources/search.svg'
import {OMDbKey} from '../config/keys.js'
import { MovieCard } from './MovieCard'

import './MoviesPage.css'

export const MoviesPage = (props) => {
  const API_URL = 'https://www.omdbapi.com?apikey=' + OMDbKey;

  var [movies, setMovies] = useState([])
  var [searchTerm, setSearchTerm] = useState("")
  var [refreshCards, setRefreshCards] = useState(false);

  const searchMovie = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`)

    const data = await response.json()
    
    setMovies(data.Search);
    setRefreshCards(false);
  }
  console.log(props.currentUser)
  useEffect(() => {
   //searchMovie('Batman');
  
  }, [])

  return (
    <>
      <div className="search">
        <input 
          placeholder="Search for movies" 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <img 
          src={SearchIcon} 
          alt="search" 
          onClick={() => {searchMovie(searchTerm); setRefreshCards(true)}}
        />
      </div>
      {movies?.length > 0
        ? (
          <div className="container">
            {refreshCards ? null : movies.map((movie) => <MovieCard movie={movie}/>)}
          </div>
        ) : (
          <div className="container">
            <h2>No movies found!</h2>
          </div>
      )}
    </>
  );
}