import './popularPost.css';
import { Link } from 'react-router-dom';
import { BsDot, BsFillHeartFill, BsEyeFill } from 'react-icons/bs';
import { FaComment } from 'react-icons/fa';
import Moment from 'react-moment';

export const PopularPost = ({ post }) => {

    const fullname = `${post.firstName} ${post.lastName}`;

    return (
        <div className='popPostWrapper'>

            <Link to={`/${post._id}`}>

                <div className="popPostLine"></div>

                <div className="popPostTop">
                    <p className='popPostUser'>{fullname}</p>
                    <div className='popPostDot'>
                        <BsDot size={25} />
                    </div>
                    <Moment className='popPostDate' date={post.createdAt} format='D MMM YYYY' />
                </div>

                <div className="popPostBottom">
                    <p className='popPostTitle'>{post.title}</p>
                    <p className="popPostText">{post.text}</p>
                    <div className="popPostCentre">
                        <div className='popPostIconBox'>
                            <div className='popPostDot2'>
                                <BsFillHeartFill size={15} />
                            </div>
                            <p className='popPostIconText'>5</p>
                        </div>
                        <div className='popPostIconBox'>
                            <div className='popPostDot2'>
                                <FaComment size={15} />
                            </div>
                            <p className='popPostIconText'>{post.comments?.length || 0}</p>
                        </div>
                        <div className='popPostIconBox'>
                            <div className='popPostDot2'>
                                <BsEyeFill size={15} />
                            </div>
                            <p className='popPostIconText'>{post.views}</p>
                        </div>
                    </div>
                </div>
                
            </Link>

        </div>
        // <div className='postWrapper'>

        //     <div className="postTop">
        //         <div className="postBoxAvatar">
        //             <img className='postAvatar' src={noAvatar} alt="" />
        //         </div>
        //         <div className="postUserDate">
        //             <p className='postUser'>{fullname}</p>
        //             <div className='postDot'>
        //                 <BsDot size={25} />
        //             </div>
        //             <Moment className='postDate' date={post.createdAt} format='D MMM YYYY' />
        //         </div>
        //     </div>

        //     <div className="postImage">
        //         <Link to={`/${post._id}`}>
        //             {post.imgUrl && (
        //                 <img className='postImg' src={`http://localhost:3002/${post.imgUrl}`} alt="" />
        //             )}
        //         </Link>
        //     </div>

        //     <div className="postCentre">
        //         <div className='postIconBox'>
        //             <div className='postDot2'>
        //                 <BsFillHeartFill size={15} />
        //             </div>
        //             <p className='postIconText'>5</p>
        //         </div>
        //         <div className='postIconBox'>
        //             <div className='postDot2'>
        //                 <FaComment size={15} />
        //             </div>
        //             <p className='postIconText'>{post.comments?.length || 0}</p>
        //         </div>
        //         <div className='postIconBox'>
        //             <div className='postDot2'>
        //                 <BsEyeFill size={15} />
        //             </div>
        //             <p className='postIconText'>{post.views}</p>
        //         </div>
        //     </div>

        //     <div className="postBottom">
        //         <p className='postTitle'>{post.title}</p>
        //         <p className="postText">{post.text}</p>
        //     </div>

        // </div>
    )
};