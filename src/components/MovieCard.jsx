import React, { useState } from 'react';
import PlusIcon from '../resources/plus.svg'
import CheckIcon from '../resources/check.svg'

export const MovieCard = ({movie}) => {
    var [addMovieClicked, setAddMovieClicked] = useState(false);
    const moviePlaceholder = 'https://via.placeholder.com/400';

    function addMovie() {

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
              <button onClick={() => {addMovie(); setAddMovieClicked(true)}}><img src={!addMovieClicked ? PlusIcon : CheckIcon} alt="Add Movie to List" /></button>
            </div>
            
          </div>
          
        </div>
    );
};
