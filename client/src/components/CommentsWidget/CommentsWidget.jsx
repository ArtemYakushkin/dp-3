import './commentsWidget.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Comment } from '../Comment/Comment';
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createComment, getPostComments } from '../../redux/features/comment/commentSlice';

export const CommentsWidget = () => {

    const [comment, setComment] = useState('');
    const dispatch = useDispatch();
    const params = useParams();
    const { comments } = useSelector((state) => state.comment);

    const handleSubmit = () => {
        try {
            const postId = params.id;
            dispatch(createComment({ postId, comment }));
            setComment('');
        } catch (error) {
            console.log(error);
        }
    };

    const fetchComments = useCallback(async () => {
        try {
            dispatch(getPostComments(params.id));
        } catch (error) {
            console.log(error);
        }
    }, [params.id, dispatch]);

    useEffect(() => {
        fetchComments()
    }, [fetchComments]);

    return (
        <div className='commWidWrapper'>
            <h3 className='commWidTitle'>Comments</h3>
            <form className='commWidForm' onSubmit={(e) => e.preventDefault()}>
                <textarea className='commWidTextarea' placeholder='Add comment' value={comment} onChange={(e) => setComment(e.target.value)} />
                <button type='submit' onClick={handleSubmit}> 
                    <AiOutlinePlusCircle />
                </button>
            </form>
            {comments?.map((cmt) => (
                <Comment key={cmt._id} cmt={cmt} />))}
        </div>
    )
};