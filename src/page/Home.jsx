import { useEffect, useState } from 'react';

import { getMovies } from '../service/getService'
import { MoviesList } from '../components/MoviesList'

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getMovies();
      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
    <h1>Trending today</h1>
    <MoviesList movies={movies}/>
    </>
  );
};

export default Home;
