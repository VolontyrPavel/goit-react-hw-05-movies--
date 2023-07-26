import { Suspense, useEffect, useState } from 'react';
import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { MovieDetailsItem } from '../components/MovieDetailsItem';

import { getMoviesById } from '../service/getService';

const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();
  
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await getMoviesById(movieId);
      setMovie(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const goBackLink = () => {
    navigate(location.state || '/');
  };

  return (
    <>
      <button type="button" onClick={goBackLink}>
        {'<-'}Go back
      </button>
      <MovieDetailsItem
        key={movie.id}
        img={movie.poster_path}
        title={movie.title}
        release={movie.release_date}
        vote={movie.vote_average}
        overview={movie.overview}
        genres={movie.genres}
      />
      <h4>Additional information</h4>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
