import {useEffect, useState} from 'react'
import { MoviesPage } from './components/MoviesPage'
import { MovieListPage } from './components/MovieListPage'

import './App.css'
import { SideMenu } from './components/SideMenu'

const App = () => {
  const [page, setPage] = useState('search');
  console.log(page);

  return (
    <>
    <div className='app'>
      <div className="sideMenu">
        <button onClick={() => setPage('search')} className='menuButton'> Search Movies</button>
        <br/><br/>
        <button onClick={() => setPage('list')} className='menuButton'> Movie List</button>
      </div>
      <div className="content">
      
        <h1>MovieFlix</h1>
        {page === 'search' && ( <MoviesPage />)}
        {page === 'list' && ( <MovieListPage />)}
      </div>
    </div>
    </>
  )
}

export default App;
