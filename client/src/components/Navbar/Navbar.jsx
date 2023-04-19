import logo from '../../image/logo.png';
import './navbar.css';

export const Navbar = () => {

    return (
        <div className='navbarWrapper'>
            <div className='container'>
                <div className="navbarWrapp">
                    <div className='navbarLogoBox'>
                        <img className='navbarLogo' src={logo} alt="" />
                        <p className='navbarLogoText'>Dear Penfriend</p>
                    </div>
                </div>
            </div>
        </div>
    )
};
