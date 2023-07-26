import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesByRewiews } from '../service/getService';
import { ReviewsList } from '../components/ReviewsList';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [, setIsLoading] = useState(false);
  const [, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const { results } = await getMoviesByRewiews(movieId);
      setReviews(results);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    reviews &&
    reviews.map(({ id, author, content }) => (
      <ReviewsList key={id} author={author} content={content} />
    ))
  );
};

export default Reviews;
