import { useSelector, useDispatch } from "react-redux";
import { checkIsAuth, logout } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { Navbar } from "../../components/Navbar/Navbar";

export const Home = () => {

    const isAuth = useSelector(checkIsAuth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        window.localStorage.removeItem('token');
        toast('Вы вышли из системы');
        navigate('/');
    }

    return (
        <div>
            <Navbar />
            {isAuth && (
                <div>Мы зарегистрировались. Ура!!!!!</div>
            )}

            {isAuth && (
                <button onClick={logoutHandler}>Выйти</button>
            )}
        </div>
    );
};
