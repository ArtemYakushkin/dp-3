import './addPost.css';
import { useSelector } from "react-redux";
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { AddPostWidget } from "../../components/AddPostWidget/AddPostWidget";
import { Navbar } from '../../components/Navbar/Navbar';
import { ProfileWidget } from "../../components/ProfileWidget/ProfileWidget";
import { AdvertisingWidget } from "../../components/AdvertisingWidget/AdvertisingWidget";

export const AddPost = () => {

    const isAuth = useSelector(checkIsAuth);

    return (
        <>
            {isAuth && (
                <Navbar />
            )}
            <div className="container">
                <div className="addPostWrapper">
                    <ProfileWidget/>
                    <AddPostWidget />
                    <AdvertisingWidget/>
                </div>
            </div>
        </>
    )
}
