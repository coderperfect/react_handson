import React from 'react';
import GuestGreeting from './GuestGreeting';
import UserGreeting from './UserGreeting';

const greeting = (props) => {
    const isLoggedIn = props.isLoggedIn;

    if(isLoggedIn){
        return <UserGreeting toggleLoggedIn = {props.toggleLoggedIn}/>;
    }

    return <GuestGreeting toggleLoggedIn = {props.toggleLoggedIn}/>;
}

export default greeting;