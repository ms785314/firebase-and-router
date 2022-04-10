import { getAuth, signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';

const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    const linkStyle = 'no-underline py-5  px-2  text-xl font-bold hover:text-orange-400'
    
    
    return (
        <div className='py-3'>
            <Link to='/home' className='no-underline py-5  px-2  text-xl font-bold hover:text-orange-400'>Home</Link>
            <Link to='/reviews' className={linkStyle}>Reviews</Link>
            <Link to='/register' className={linkStyle}>Register</Link>
            <Link to='/about' className={linkStyle}>About</Link>
            {
                user?.uid? <Link to={''} onClick={()=> signOut(auth)} className={linkStyle}>Log Out</Link> :<Link to='/login' className={linkStyle}>Log In</Link>
            }
        </div>
    );
};

export default Header;