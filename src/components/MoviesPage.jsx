import { useEffect, useState } from 'react';
import SearchIcon from '../search.svg'
import {OMDbKey} from '../config/keys.js'
import { MovieCard } from './MovieCard'

import './MoviesPage.css'

export const MoviesPage = () => {
    const API_URL = 'http://www.omdbapi.com?apikey=' + OMDbKey;

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovie = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`)

    const data = await response.json()

    setMovies(data.Search)
  }

  useEffect(() => {
   searchMovie('Batman') 
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
          onClick={() => {searchMovie(searchTerm)}}
        />
      </div>
      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => <MovieCard movie={movie}/>)}
          </div>
        ) : (
          <div className="container">
            <h2>No movies found!</h2>
          </div>
      )}
    </>
  );
}