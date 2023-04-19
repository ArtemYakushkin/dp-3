import './register.css';
import logo from '../../image/logo.png';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../redux/features/auth/authSlice';
import { toast } from 'react-toastify';
import { checkIsAuth } from '../../redux/features/auth/authSlice';

export const Register = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [occupation, setOccupation] = useState('');
    const [location, setLocation] = useState('');
    const [age, setAge] = useState('');
    // const [picturePath, setPicturePath] = useState('');
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
            dispatch(registerUser({ firstName, lastName, email, password, location, occupation, age }));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='regContainer'>
            <div className='regWrapper'>

                <div className="regLeft">
                    <img className='logo' src={logo} alt="" />
                    <p className='logoText'>Dear Penfriend</p>
                    <p className='regText'>
                        Hi! How are you? My name is Anna. I am from Ukraine. Where are you from?
                        I teach English for primary school learners. I speak Ukrainian and French. Do you want to find penfriends?
                        Please write soon.
                        Best wishes,
                        Anna
                    </p>
                </div>

                <div className="regRight">
                    <h4 className='regTitle'>Sign Up</h4>
                    <form className='regForm' onSubmit={(e) => e.preventDefault()}>
                        <div className='regWrappInput'>
                            <input className='regInputName' name='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name *' />
                            <input className='regInputName' name='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name *' />
                        </div>
                        <div className='regWrappInput'>
                            <input className='regInputName' name='age' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age *' />
                            <input className='regInputName' name='location' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='Location *' />
                        </div>
                        <input className='regInput' name='occupation' value={occupation} onChange={(e) => setOccupation(e.target.value)} placeholder='Occupation *' />
                        <input className='regInput' name='email' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email Address *' />
                        <input className='regInput' name='password' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password *' />
                        <button className='regBtnSubmit' type='submit' onClick={handleSubmit}>Sign Up</button>
                        <div className='regSwitchWrapper'>
                            <button>
                                <Link to={'/login'}>
                                    <p className='regBtnSwitch'>Already have an account? <span className='regLog'>Sign In</span></p>
                                </Link>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
};
