const initialState = {
    posts: [],
    removedPosts: [],
    currentPage: 1,
    loading: false,
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOADING':
        return { ...state, loading: true };
      case 'SET_POSTS':
        return { ...state, posts: action.payload, loading: false };
      case 'REMOVE_POST':
        return {
          ...state,
          removedPosts: [...state.removedPosts, action.payload],
        };
      case 'SET_PAGE':
        return { ...state, currentPage: action.payload };
      default:
        return state;
    }
  };
  
  export default postReducer;
  