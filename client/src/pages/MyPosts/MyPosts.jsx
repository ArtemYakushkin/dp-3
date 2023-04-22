import './myPosts.css';
import { useSelector } from "react-redux";
import { checkIsAuth } from '../../redux/features/auth/authSlice';
import { Navbar } from '../../components/Navbar/Navbar';
import { MyPostWidget } from "../../components/MyPostWidget/MyPostWidget";
import { useState, useEffect } from 'react';
import axios from '../../utils/axios';

export const MyPosts = () => {

    const isAuth = useSelector(checkIsAuth);
    const [posts, setPosts] = useState([]);

    const fetchMyPosts = async () => {
        try {
            const { data } = await axios.get('/posts/user/me');
            setPosts(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchMyPosts()
    }, []);

    return (
        <>
            {isAuth && (
                <Navbar />
            )}
            <div className="container">
                <div className="myPostWrapp">
                    {posts?.map((post, idx) => (
                        <MyPostWidget post={post} key={idx} />
                    ))}
                </div>
            </div>
        </>
    )
}