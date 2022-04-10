import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Header = () => {
    const linkStyle = 'no-underline py-5  px-2  text-xl font-bold hover:text-orange-400'
    const {user,hanldeSignOut} = useFirebase();
    
    return (
        <div className='py-3'>
            <Link to='/home' className='no-underline py-5  px-2  text-xl font-bold hover:text-orange-400'>Home</Link>
            <Link to='/reviews' className={linkStyle}>Reviews</Link>
            <Link to='/register' className={linkStyle}>Register</Link>
            <Link to='/about' className={linkStyle}>About</Link>
            {
                user?.uid? <Link to={''} onClick={hanldeSignOut} className={linkStyle}>Log Out</Link> :<Link to='/login' className={linkStyle}>Log In</Link>
            }
        </div>
    );
};

export default Header;