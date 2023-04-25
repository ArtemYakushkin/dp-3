import './editPost.css';
import { useSelector } from "react-redux";
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { EditPostWidget } from "../../components/EditPostWidget/EditPostWidget";
import { Navbar } from '../../components/Navbar/Navbar';
import { ProfileWidget } from "../../components/ProfileWidget/ProfileWidget";
import { AdvertisingWidget } from "../../components/AdvertisingWidget/AdvertisingWidget";

export const EditPost = () => {

    const isAuth = useSelector(checkIsAuth);

    return (
        <>
            {isAuth && (
                <Navbar />
            )}
            <div className="container">
                <div className="editPostWrapper">
                    <ProfileWidget />
                    <EditPostWidget />
                    <AdvertisingWidget />
                </div>
            </div>
        </>
    )
};