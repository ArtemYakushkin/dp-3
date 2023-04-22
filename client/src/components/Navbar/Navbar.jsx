import logo from '../../image/logo.png';
import './navbar.css';
import { BsMoonStarsFill, BsSunFill, BsFillPlusCircleFill, BsCardList } from 'react-icons/bs';
import { MdHelp } from 'react-icons/md';
import { ImExit } from 'react-icons/im';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { logout } from '../../redux/features/auth/authSlice';

export const Navbar = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dark = false;
    const user = useSelector((state) => state.auth.user);
    const fullname = `${user.firstName} ${user.lastName}`;

    const logoutHandler = () => {
        dispatch(logout());
        window.localStorage.removeItem('token');
        toast('You are logged out');
        navigate('/');
    };

    return (
        <div className='navbarWrapper'>
            <div className='container'>
                <div className="navbarWrapp">
                    <Link to={'/home'}>
                        <div className='navbarLogoBox'>
                            <img className='navbarLogo' src={logo} alt="" />
                            <p className='navbarLogoText'>Dear Penfriend</p>
                        </div>
                    </Link>
                    <div className='navbarMenu'>
                        <div className='navbarIconMenu'>
                            <button className='navbarIconBtn btn'>
                                <Link to={'/add'}><BsFillPlusCircleFill size={20} /></Link>
                            </button>
                            <button className='navbarIconBtn btn'>
                                <Link to={'/posts'}><BsCardList size={20} /></Link>
                            </button>
                            <button className='navbarIconBtn btn'>
                                <Link to={'/help'}><MdHelp size={20} /></Link>
                            </button>
                            {dark ? (
                                <button className='navbarIconBtn'>
                                    <BsSunFill size={20} />
                                </button>
                            ) : (
                                <button className='navbarIconBtn'>
                                    <BsMoonStarsFill size={20} />
                                </button>
                            )}
                        </div>
                        <p className='navbarUsername'>{fullname}</p>
                        <button className='navbarIconBtn' onClick={logoutHandler}>
                            <ImExit size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};
