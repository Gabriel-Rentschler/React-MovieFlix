import React, { useState } from 'react';
import PlusIcon from '../resources/plus.svg'
import CheckIcon from '../resources/check.svg'
import { addDoc } from 'firebase/firestore'
import { _MovieListTable, auth } from '../config/keysConfig';

export const MovieCard = ({movie}) => {
    var [addMovieClicked, setAddMovieClicked] = useState(false);
    const moviePlaceholder = 'https://via.placeholder.com/400';

    async function addMovie() {
      try {
        if (auth.currentUser !== null) {
          await addDoc(_MovieListTable, {
            Poster: movie.Poster,
            Title: movie.Title,
            Type: movie.Type,
            Watched: false,
            Year: movie.Year,
            UserId: auth.currentUser?.uid
          }).finally(console.log("Movie Added!"));

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
                !addMovieClicked ? <button onClick={() => {addMovie(); setAddMovieClicked(true)}}><img src={PlusIcon} alt="Add Movie to List" /></button>
                : <button><img src={CheckIcon} alt="Movie Added to List" /></button>
              }
              
            </div>
            
          </div>
          
        </div>
    );
};
