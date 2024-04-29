import {useEffect, useState} from 'react'
import { MovieCard } from './components/MovieCard'

import './App.css'
import SearchIcon from './search.svg'

//3602421b - OMDb API KEY

const API_URL = 'http://www.omdbapi.com?apikey=3602421b'

const App = () => {

  const [movies, setMovies] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)

    const data = await response.json()

    console.log(data.Search)
    setMovies(data.Search)
  }

  useEffect(() => {
   searchMovie('Batman') 
  }, [])

  return (
    <div className="app">
      <h1>MovieFlix</h1>

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
    </div>
  );
}

export default App;
