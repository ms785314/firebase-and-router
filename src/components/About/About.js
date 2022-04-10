import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);
const About = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h1>Welcome {user? user.displayName : 'Mr. X'}</h1>
        </div>
    );
};

export default About;