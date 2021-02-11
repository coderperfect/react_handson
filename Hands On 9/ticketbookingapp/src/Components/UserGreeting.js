import React from 'react';
import LogoutButton from './Logout';

const userGreeting = (props) => {
    const onClick = () => {
        props.toggleLoggedIn();
    }

    return (
        <div>
            <h1>Welcome back</h1>
            <LogoutButton onClick={onClick}/>
        </div>
    );
}

export default userGreeting;