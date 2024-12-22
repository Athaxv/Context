import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {user} = useContext(UserContext)

    if (!user) { 
        return <div>Please Login First!</div>;
    }

    return <div>Welcome Back, {user.username}!</div>;
}

export default Profile
