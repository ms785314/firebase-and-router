import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const About = () => {
    const {user} = useFirebase();

    return (
        <div>
            <h1>Welcome Mr. {user? user.displayName : 'X'}</h1>
        </div>
    );
};

export default About;