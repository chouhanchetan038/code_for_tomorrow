import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { removePost } from '../Store/actions';

const CardList = () => {
    const dispatch = useDispatch();
    const { posts, removedPosts, currentPage } = useSelector((state) => state);

    const visiblePosts = posts
        .filter(post => !removedPosts.includes(post.id))
        .slice((currentPage - 1) * 6, currentPage * 6);

    const handleRemove = (id) => {
        dispatch(removePost(id));
    };

    return (
        <div className="card-list">
            {visiblePosts.map(post => (
                <Card key={post.id} post={post} onRemove={handleRemove} />
            ))}
        </div>
    );
};

export default CardList;
