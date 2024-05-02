import { useState} from 'react'
import { MoviesPage } from './components/MoviesPage'
import { MovieListPage } from './components/MovieListPage'
import './App.css'
import Login from './components/Login'

const App = () => {
  var [page, setPage] = useState('search');
  var [isAuth, setIsAuth] = useState(false);
  console.log(page);

  return (
    <>
    <div className='app'>
      {isAuth ?
        <>
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
        </> :
        <Login setIsAuth={setIsAuth}/>
      }
    </div>
    </>
  )
}

export default App;
