import React from 'react';

export const MovieCard = ({movie}) => {
    const moviePlaceholder = 'https://via.placeholder.com/400';

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
          </div>
          
        </div>
    );
};
