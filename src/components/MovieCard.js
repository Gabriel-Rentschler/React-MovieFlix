import React, { useEffect, useState } from 'react';
import PlusIcon from '../resources/plus.svg'
import CheckIcon from '../resources/check.svg'
import { addDoc, getDocs } from 'firebase/firestore'
import { _MovieListTable, auth } from '../config/keysConfig';

export const MovieCard = ({movie, currentUser}) => {
    var [addMovieClicked, setAddMovieClicked] = useState(false);
    const moviePlaceholder = 'https://via.placeholder.com/400';

    

    async function isMovieAdded() {
      console.log(currentUser);
      try {
        if (auth.currentUser !== null) {
          const data = await getDocs(_MovieListTable);
          data.docs.forEach(doc => {
            if (doc.data().MovieId === movie.imdbID && doc.data().UserId === auth.currentUser?.uid) {
              setAddMovieClicked(true);
              return;
            }
          });
        }
      } catch (e) {
        
      }
    }
    
    useEffect(() => {
      isMovieAdded();
    }, [])

    async function addMovie() {
      try {
        if (auth.currentUser !== null) {
          await addDoc(_MovieListTable, {
            Poster: movie.Poster,
            Title: movie.Title,
            Type: movie.Type,
            Watched: false,
            Year: movie.Year,
            UserId: auth.currentUser?.uid,
            MovieId: movie.imdbID
          }).finally(console.log("Movie Added!"));
          setAddMovieClicked(true)
          return;
        }
        alert("Need to be logged in to add movies to your list!")
      } catch (e) {
        
      }
    }

    return (
        <div className="movie">
          <div>
            <p>{movie.Year}</p>
          </div>
          <div>
            <img src={movie.Poster !== 'N/A' ? movie.Poster : moviePlaceholder} alt={movie.Title}/>
          </div>

          <div>
            <span>{movie.Type}</span>
            <h3>{movie.Title}</h3>
            <div className="addMovieDiv">
              {
                !addMovieClicked ? <button onClick={() => {addMovie()}}><img src={PlusIcon} alt="Add Movie to List" /></button>
                : <button><img src={CheckIcon} alt="Movie Added to List" /></button>
              }
              
            </div>
            
          </div>
          
        </div>
    );
};
