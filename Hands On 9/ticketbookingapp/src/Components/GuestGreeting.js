import React from 'react';
import LoginButton from './Login';

const guestGreeting = (props) => {
    const onClick = () => {
        props.toggleLoggedIn();
    }

    return (
        <div>
            <h1>Please sign up</h1>
            <LoginButton onClick={onClick}/>
        </div>
    );
}

export default guestGreeting;