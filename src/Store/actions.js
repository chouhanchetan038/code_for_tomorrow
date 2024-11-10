import axios from 'axios';

export const fetchPosts = () => async (dispatch) => {
  dispatch({ type: 'LOADING' });
  setTimeout(async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({ type: 'SET_POSTS', payload: response.data });
  }, 5000);
};

export const removePost = (id) => ({
  type: 'REMOVE_POST',
  payload: id,
});

export const setPage = (page) => ({
  type: 'SET_PAGE',
  payload: page,
});
