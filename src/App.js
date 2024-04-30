import {useEffect, useState} from 'react'
import { MoviesPage } from './components/MoviesPage'

import './App.css'
import { SideMenu } from './components/SideMenu'

const App = () => {
  
  return (
    <>
    <div className='app'>
      
      <div className="content">
      
        <h1>MovieFlix</h1>
        <MoviesPage />
      </div>
    </div>
    </>
  )
}

export default App;
