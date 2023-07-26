import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesByCast } from '../service/getService';
import { CastList } from '../components/CastList';

const Cast = () => {
  const [info, setInfo] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { cast } = await getMoviesByCast(movieId);
      setInfo(cast);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    info &&
    info.map(({ id, profile_path, name, character }) => (
      <CastList
        key={id}
        profile={profile_path}
        name={name}
        character={character}
      />
    ))
  );
};

export default Cast;
