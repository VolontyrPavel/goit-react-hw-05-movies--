import axios from 'axios';

const API_KEY = '5710a8f06496583a27b9e808ee84dcbe';
const BASE_URL = 'https://api.themoviedb.org/3';
const TRENDING_DAY = '/trending/movie/day';
const LANGUAGE = 'en-US';
const SEARCH_QUERY = '/search/movie';
const ADULT = 'false';
const BY_ID = '/movie';
const CAST = '/credits'
const REVIEWS = '/reviews'

export const getMovies = async () => {
  const { data } = await axios.get(
    `${BASE_URL}${TRENDING_DAY}?api_key=${API_KEY}&page=1&language=${LANGUAGE}`
  );
  return data.results;
};

export const getMoviesByQuery = async (query, page = 1) => {
  const { data } = await axios.get(
    `${BASE_URL}${SEARCH_QUERY}?query=${query}&api_key=${API_KEY}&page=${page}&include_adult=${ADULT}&language=${LANGUAGE}`
  );
  return data.results;
};

export const getMoviesById = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}${BY_ID}/${id}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  return data;
};

export const getMoviesByCast = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}${BY_ID}/${id}${CAST}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  return data;
};

export const getMoviesByRewiews = async (id) => {
  const { data } = await axios.get(
    `${BASE_URL}${BY_ID}/${id}${REVIEWS}?api_key=${API_KEY}&language=${LANGUAGE}`
  );
  return data;
};