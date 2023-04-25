import './postDetailsWidget.css';
import axios from '../../utils/axios';
import noAvatar from '../../image/no-avatar.png';
import { BsDot, BsFillHeartFill, BsEyeFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';
import { AiOutlineCloseCircle, AiTwotoneEdit, AiFillDelete } from 'react-icons/ai';
import Moment from 'react-moment';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removePost } from '../../redux/features/post/postSlice';
import { toast } from 'react-toastify';

export const PostDetailsWidget = () => {

    const [post, setPost] = useState('');
    const { user } = useSelector((state) => state.auth);
    const params = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const fullname = `${post.firstName} ${post.lastName}`;

    const fetchPost = useCallback(async () => {
        const { data } = await axios.get(`/posts/${params.id}`);
        setPost(data);
    }, [params.id]);

    useEffect(() => {
        fetchPost();
    }, [fetchPost]);

    const removePostHandler = () => {
        try {
            dispatch(removePost(params.id));
            toast('The post has been deleted.');
            navigate(-1);
        } catch (error) {
            console.log(error);
        }
    };

    if (!post) {
        return (
            <div className='text-xl text-center text-white py-10'>
                Loading...
            </div>
        );
    }

    return (
        <div className='detWrapper'>

            <div className='detClose'>
                <button className='detBtnClose' onClick={() => navigate(-1)}>
                    <AiOutlineCloseCircle size={20} />
                </button>
            </div>
        
            <div className="detTop">
                <div className="detBoxAvatar">
                    <img className='detAvatar' src={noAvatar} alt="" />
                </div>
                <div className="detUserDate">
                    <p className='detUser'>{fullname}</p>
                    <div className='detDot'>
                        <BsDot size={25} />
                    </div>
                    <Moment className='detDate' date={post.createdAt} format='D MMM YYYY' />
                </div>
            </div>

            <div className="detImage">
                {post.imgUrl && (
                    <img className='detImg' src={`http://localhost:3002/${post.imgUrl}`} alt="" />
                )}
            </div>

            <div className="detCentre">
                <div className='detIconBox'>
                    <div className='detDot2'>
                        <BsFillHeartFill size={15} />
                    </div>
                    <p className='detIconText'>5</p>
                </div>
                <div className='detIconBox'>
                    <div className='detDot2'>
                        <FaComment size={15} />
                    </div>
                    <p className='detIconText'>{post.comments?.length || 0}</p>
                </div>
                <div className='detIconBox'>
                    <div className='detDot2'>
                        <BsEyeFill size={15} />
                    </div>
                    <p className='detIconText'>{post.views}</p>
                </div>
            </div>

            <div className="detBottom">
                <p className='detTitle'>{post.title}</p>
                <p className="detText">{post.text}</p>
            </div>

            {user?._id === post.author && (
                <>
                    <div className="detString"></div>
                    <div className="detFooter">
                        <Link to={`/${params.id}/edit`}>
                            <div className='detFooterBox'>
                                <div className='detFooterIcon'>
                                    <AiTwotoneEdit size={25} />
                                </div>
                                <p className='detFooterText'>Edit</p>
                            </div>
                        </Link>
                        <div className='detFooterBox' onClick={removePostHandler}>
                            <p className='detFooterText'>Delete</p>
                            <div className='detFooterIcon'>
                                <AiFillDelete size={25} />
                            </div>
                        </div>
                    </div>
                </>
            )}

        </div>
    )
};
