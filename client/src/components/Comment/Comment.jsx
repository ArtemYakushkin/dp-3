import './comment.css';
import { BsDot } from 'react-icons/bs';
import { HiOutlineTrash } from 'react-icons/hi';
import Moment from 'react-moment';

export const Comment = ({ cmt }) => {

    const fullname = `${cmt.firstName} ${cmt.lastName}`;

    return (
        <div className='commentWrapper'>
            <div className='commentLine'></div>
            <div className="commentTop">
                <div className="commentLeft">
                    <p className='commentUser'>{fullname}</p>
                    <div className='commentDot'>
                        <BsDot size={25} />
                    </div>
                    <Moment className='commentDate' date={cmt.createdAt} format='D MMM YYYY' />
                </div>
                <div className="commentRight">
                    <button>
                        <HiOutlineTrash />
                    </button>
                </div>
            </div>
            <div className="commentBottom">
                <p className="commentText">{cmt.comment}</p>
            </div>
        </div>
    )
};