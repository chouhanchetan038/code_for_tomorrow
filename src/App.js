import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, removePost, setPage } from './Store/actions';
import CardList from './Component/CardList';
import Pagination from './Component/Pagination';
import Nav from './Component/Nav';

const App = () => {
  const dispatch = useDispatch();
  const { posts, currentPage, loading } = useSelector((state) => state);
  const postsPerPage = 6;

  useEffect(() => {
    setTimeout(() => {
      dispatch(fetchPosts());
    }, 5000); // 5 seconds delay to show loading
  }, [dispatch]);

  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handleRemove = (id) => {
    dispatch(removePost(id));
    if (currentPosts.length === 1 && currentPage > 1) {
      dispatch(setPage(currentPage - 1));
    }
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div>
      <Nav/>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <CardList posts={currentPosts} onRemove={handleRemove} />
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={handlePageChange} // Corrected this line
          />
        </>
      )}
    </div>
  );
};

export default App;
