import { getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { _MovieListTable, auth } from '../config/keysConfig';
import { MovieListCard } from './MovieListCard';



export const MovieListPage = () => {
  var [updateList, setUpdateList] = useState(false);
  var [movies, setMovies] = useState([]);


  useEffect(() => {
    getMovieList();
  }, [updateList])

  async function getMovieList() {
    try {
      const data = await getDocs(_MovieListTable);
      var movieList = [];
      data.docs.forEach(doc => {
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
            {movies.map((movie) => <MovieListCard movie={movie} setUpdateList={setUpdateList} updateList={updateList}/>)}
          </div>
        ) : (
          <div className="container">
            <h2>No movies found!</h2>
          </div>
      )}
    </>
  );
}