import { useSelector } from "react-redux";
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { Navbar } from "../../components/Navbar/Navbar";
import { ProfileWidget } from "../../components/ProfileWidget/ProfileWidget";
import { AdvertisingWidget } from "../../components/AdvertisingWidget/AdvertisingWidget";
import { PostsWidget } from '../../components/PostsWidget/PostsWidget';
import './home.css';

export const Home = () => {

    const isAuth = useSelector(checkIsAuth);

    return (
        <>
            {isAuth && (
                <Navbar />
            )}
            <div className="container">
                <div className="homeWrapper">
                    <ProfileWidget />
                    <PostsWidget />
                    <AdvertisingWidget/>
                </div>
            </div>
                
        </>
    );
};
