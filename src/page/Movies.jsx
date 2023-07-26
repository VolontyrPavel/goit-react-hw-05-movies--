import { useEffect, useState } from 'react';
import { useSearchParams, useParams, useLocation, Link } from 'react-router-dom';

import { MovieSearchForm } from '../components/MovieSearchForm';
import { MoviesList } from '../components/MoviesList';
import { getMoviesByQuery } from '../service/getService';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();
  
  const location = useLocation();

  const searchValue = searchParams.get('query');

  useEffect(() => {
    !searchValue && setSearchParams({});
  }, [searchValue, setSearchParams]);

  const fetchSearchData = async (searchParams) => {
    setIsLoading(true);
    try {
      const data = await getMoviesByQuery(searchParams);
      setMovies(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
      setSearchParams({});
    }
  };

  return (
    <>
      <MovieSearchForm
        fetchSearchData={fetchSearchData}
        setSearchParams={setSearchParams}
        searchValue={searchValue}
      />
      <Link to={`/movies/${movieId}`} state={location}></Link>
      <MoviesList movies={movies} />
    </>
  );
};

export default Movies;
