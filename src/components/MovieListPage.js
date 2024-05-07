import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { _MovieListTable, auth } from '../config/keysConfig';
import { MovieCard } from './MovieCard';



export const MovieListPage = () => {
  var [movies, setMovies] = useState([]);


  useEffect(() => {
    getMovieList();
  }, [])

  async function getMovieList() {
    try {
      const data = await getDocs(_MovieListTable);
      var movieList = [];
      data.docs.forEach(doc => {
        console.log(doc.data().UserId)
        if (doc.data().UserId === auth.currentUser?.uid) {
          movieList.push({
            ...doc.data(),
            id: doc.id
          });
        }
        setMovies(movieList);
      });
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <>
      {movies?.length > 0
        ? (
          <div className="container">
            {movies.map((movie) => <MovieCard movie={movie}/>)}
          </div>
        ) : (
          <div className="container">
            <h2>No movies found!</h2>
          </div>
      )}
    </>
  );
}