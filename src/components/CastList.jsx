import PropTypes from 'prop-types';

export const CastList = ({ profile, name, character }) => {
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  
  return (
    <>
      <img
        src={
          profile ? `https://image.tmdb.org/t/p/w500${profile}` : defaultImg
        }
        width={250}
        alt={name}
      />

      <p>{name}</p>
      <p>Character: {character}</p>
    </>
  );
};

CastList.propType = {
  profile: PropTypes.string,
  name: PropTypes.string,
  character: PropTypes.string,
};
