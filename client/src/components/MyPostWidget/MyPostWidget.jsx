import './myPostWidget.css';
import { Link } from 'react-router-dom';
import { BsFillHeartFill, BsEyeFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';
import Moment from 'react-moment';

export const MyPostWidget = ({post}) => {
    return (
        <div className='userPostWrapper'>
            <div className='userPostBoxImg'>
                <Link to={`/${post._id}`}>
                    {post.imgUrl && (
                        <img className='userPostImg' src={`http://localhost:3002/${post.imgUrl}`} alt="" />
                    )}
                </Link>
            </div>
            <div className='userPostBottom'>
                <div className="userPostLeft">
                    <div className='userPostIconBox'>
                        <div className='userPostDot2'>
                            <BsFillHeartFill size={15} />
                        </div>
                        <p className='userPostIconText'>5</p>
                    </div>
                    <div className='userPostIconBox'>
                        <div className='userPostDot2'>
                            <FaComment size={15} />
                        </div>
                        <p className='userPostIconText'>{post.comments?.length || 0}</p>
                    </div>
                    <div className='userPostIconBox'>
                        <div className='userPostDot2'>
                            <BsEyeFill size={15} />
                        </div>
                        <p className='userPostIconText'>{post.views}</p>
                    </div>
                </div>
                <div className="userPostRight">
                    <Moment className='userPostDate' date={post.createdAt} format='D MMM YYYY' />
                    {/* <p className='userPostDate'>12/11/2022</p> */}
                </div>
            </div>
        </div>
    )
};
