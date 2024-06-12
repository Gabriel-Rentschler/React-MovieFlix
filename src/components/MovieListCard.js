import DeleteIcon from '../resources/delete.svg'
import { deleteDoc, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
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

    async function watchedMovie(movieId) {
      try {
        const movieRef = doc(db, "MovieList", movieId);
        const movie = await getDoc(movieRef);
        const movieData = movie.data();
        await setDoc(doc(db, "MovieList", movieId), {
          MovieId: movieData.MovieId,
          Poster: movieData.Poster,
          Title: movieData.Title,
          Type: movieData.Type,
          UserId: movieData.UserId,
          Watched: !movieData.Watched,
          Year: movieData.Year
        })
        
        console.log(movieData);
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
              <button onClick={() => {watchedMovie(movie.id)}}>Watched</button>
              <button onClick={() => {deleteMovie(movie.id)}}><img src={DeleteIcon} alt="Delete Movie From List" /></button>
            </div>
            
          </div>
          
        </div>
    );
};
