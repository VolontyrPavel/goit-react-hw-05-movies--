import PropTypes from 'prop-types';

export const MovieSearchForm = ({
  fetchSearchData,
  setSearchParams,
  searchValue,
}) => {
  const onHandleInput = ({ target: { value } }) => {
    setSearchParams({ query: value });
  };

  const onHundleSubmit = e => {
    e.preventDefault();
    fetchSearchData(searchValue);
  };

  return (
    <form onSubmit={onHundleSubmit}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
        onChange={onHandleInput}
        value={searchValue||''}
      ></input>
      <button type="submit">Search</button>
    </form>
  );
};

MovieSearchForm.propType = {
  fetchSearchData: PropTypes.func.isRequired,
  setSearchParams: PropTypes.object.isRequired,
  searchValue: PropTypes.string,
};

