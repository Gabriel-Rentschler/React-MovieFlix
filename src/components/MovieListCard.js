import DeleteIcon from '../resources/delete.svg'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/keysConfig';

export const MovieListCard = ({movie, setUpdateList, updateList}) => {
    const moviePlaceholder = 'https://via.placeholder.com/400';

    async function deleteMovie(movieId) {
      try {
        const movieRef = doc(db, "MovieList", movieId);
        await deleteDoc(movieRef).finally(() => {setUpdateList(!updateList)});
      } catch (e) {
        console.error(e);
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
              <button onClick={() => {deleteMovie(movie.id)}}><img src={DeleteIcon} alt="Delete Movie From List" /></button>
            </div>
            
          </div>
          
        </div>
    );
};
