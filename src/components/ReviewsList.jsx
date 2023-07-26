import PropTypes from 'prop-types';

export const ReviewsList = ({ author, content }) => {
  return (
    <>
      <h5>Author: {author}</h5>
      <p>{content}</p>
    </>
  );
};

ReviewsList.propType = {
  author: PropTypes.string,
  content: PropTypes.string,
};
