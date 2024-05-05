import { useState} from 'react'
import { MoviesPage } from './components/MoviesPage'
import { MovieListPage } from './components/MovieListPage'
import './App.css'
import { auth, googleProvider } from './config/keysConfig'
import { signInWithPopup, signOut } from 'firebase/auth'

const App = () => {
  var [page, setPage] = useState('search');
  var [currentUser, setCurrentUser] = useState(auth.currentUser?.uid);

  async function Login () {
    try {
        await signInWithPopup(auth, googleProvider)
        .then(setCurrentUser(auth.currentUser?.uid));
    } catch (e) {
        console.error(e);
    }
  }

  async function Logout () {
    try {
      await signOut(auth)
      .then(setCurrentUser(null));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <>
    <div className='app'>
      <div className="sideMenu">
        {currentUser !== null ? 
          <button onClick={() => {Logout()}}>Log Out</button> : 
          <button onClick={() => {Login()}}>Log In With Google</button>
        }
        
        <br/><br/>
        <button onClick={() => setPage('search')} className='menuButton'> Search Movies</button>
        <br/><br/>
        <button onClick={() => setPage('list')} className='menuButton'> Movie List</button>
      </div>
      <div className="content">
      
        <h1>MovieLister</h1>
        {page === 'search' && ( <MoviesPage />)}
        {page === 'list' && ( <MovieListPage />)}
      </div>
    </div>
    </>
  )
}

export default App;
