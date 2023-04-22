import { useSelector } from "react-redux";
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import './postPage.css';
import { Navbar } from '../../components/Navbar/Navbar';
import { PostDetailsWidget } from "../../components/PostDetailsWidget/PostDetailsWidget";
import { CommentsWidget } from "../../components/CommentsWidget/CommentsWidget";

export const PostPage = () => {

    const isAuth = useSelector(checkIsAuth);

    return (
        <>
            {isAuth && (
                <Navbar />
            )}
            <div className="container">
                <div className="postPageWrapper">
                    <PostDetailsWidget />
                    <CommentsWidget />
                </div>
            </div>
        </>
    )
};
