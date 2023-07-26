import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(({ id, title }) => (
        <Link key={id} to={`/movies/${id}`}>
          <li>{title}</li>
        </Link>
      ))}
    </ul>
  )
}

MoviesList.propType = {
  movies: PropTypes.arrayOf(PropTypes.string),
};
