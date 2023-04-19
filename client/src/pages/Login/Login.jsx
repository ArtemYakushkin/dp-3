import './login.css';
import logo from '../../image/logo.png';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { checkIsAuth } from '../../redux/features/auth/authSlice';

export const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { status } = useSelector((state) => state.auth);
    const isAuth = useSelector(checkIsAuth);

    useEffect(() => {
        if (status) {
            toast(status);
        }
        if (isAuth) {
            navigate('/home');
        }
    }, [status, isAuth, navigate]);

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ email, password }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='loginContainer'>
            <div className='loginWrapper'>

                <div className="loginLeft">
                    <img className='logo' src={logo} alt="" />
                    <p className='logoText'>Dear Penfriend</p>
                    <p className='loginText'>
                        Hi! How are you? My name is Anna. I am from Ukraine. Where are you from?
                        I teach English for primary school learners. I speak Ukrainian and French. Do you want to find penfriends?
                        Please write soon.
                        Best wishes,
                        Anna
                    </p>
                </div>

                <div className="loginRight">
                    <h4 className='loginTitle'>Sign In</h4>
                    <form className='loginForm' onSubmit={(e) => e.preventDefault()}>
                        <input className='loginInput' name='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email Address *' />
                        <input className='loginInput' name='password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password *' />
                        <button className='loginBtnSubmit' type='submit' onClick={handleSubmit}>Sign In</button>
                        <div className='loginSwitchWrapper'>
                            <button>
                                <Link to={'/'}>
                                    <p className='loginBtnSwitch'>Don’t have an account? <span className='loginLog'>Sign Up</span></p>
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};