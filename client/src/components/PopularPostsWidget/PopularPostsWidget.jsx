import './popularPostsWidget.css';
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPosts } from '../../redux/features/post/postSlice';
import { PopularPost } from '../PopularPost/PopularPost';

export const PopularPostsWidget = () => {

    const popularPosts = useSelector((state) => state.post.popularPosts);
    const dispatch = useDispatch();
    console.log(popularPosts)

    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    if (!popularPosts.length) {
        return (
            <div className=''>
                Posts do not exist
            </div>
        );
    }

    return (
        <div className="popPostsWrapper">
            <h3 className='popPostsTitle'>Popular posts</h3>
            {popularPosts?.map((post, idx) => (
                <PopularPost key={idx} post={post} />))}
        </div>
    );
};
