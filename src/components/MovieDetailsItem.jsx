import PropTypes from 'prop-types';

export const MovieDetailsItem = ({
  img,
  title,
  release,
  vote,
  overview,
  genres,
}) => {
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  return (
    <div>
      <img
        src={img ? `https://image.tmdb.org/t/p/w500${img}` : defaultImg}
        width={250}
        alt={title}
      />
      <h2>
        {title} ({release})
      </h2>
      <p>User Scores: {vote}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      {genres && genres.map(({ name, id }) => <p key={id}>{name}</p>)}
    </div>
  );
};

MovieDetailsItem.propType = {
  img: PropTypes.string,
  title: PropTypes.string,
  release: PropTypes.string,
  vote: PropTypes.string,
  overview: PropTypes.string,
  genres: PropTypes.string,
};
