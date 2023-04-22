import './postsWidget.css';
import { Post } from '../Post/Post';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from '../../redux/features/post/postSlice';

export const PostsWidget = () => {

    const posts = useSelector((state) => state.post.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    if (!posts.length) {
        return (
            <div className=''>
                Posts do not exist
            </div>
        );
    }

    return (
        <div className="postsWrapper">
            {posts?.map((post, idx) => (
                <Post key={idx} post={post} />))}
        </div>
    );
};
