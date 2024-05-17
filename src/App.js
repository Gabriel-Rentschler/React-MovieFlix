import { useState} from 'react'
import { MoviesPage } from './components/MoviesPage'
import { MovieListPage } from './components/MovieListPage'
import { auth, googleProvider } from './config/keysConfig'
import { signInWithPopup, signOut } from 'firebase/auth'

import './App.css'

function App() {
  var [page, setPage] = useState('search');
  var [currentUser, setCurrentUser] = useState(auth.currentUser?.uid);

  async function Login () {
    try {
        var result = await signInWithPopup(auth, googleProvider)
        setCurrentUser(result.user.id)
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
        <div>
        {currentUser !== null ? 
          <button className='sideMenuBtn' onClick={() => {Logout()}}>Log Out</button> : 
          <button className='sideMenuBtn' onClick={() => {Login()}}>Log In With Google</button>
        }
        </div>
        <div>
        <button className='sideMenuBtn' onClick={() => setPage('search')}> Search Movies</button>
        </div>
        <div>
        <button className='sideMenuBtn' onClick={() => setPage('list')}> Movie List</button>
        </div>
      </div>
      <div className="content">
        
        <h1>MovieFlix</h1>
        {currentUser !== null ? <>
          {page === 'search' && ( <MoviesPage currentUser={currentUser}/>)}
          {page === 'list' && ( <MovieListPage />)}
        </>
        :  
        <>
          {page === 'search' && ( <MoviesPage currentUser={currentUser}/>)}
          {page === 'list' && ( <MovieListPage />)}
        </>
        }
        
        
      </div>
    </div>
    </>
  )
}

export default App;
