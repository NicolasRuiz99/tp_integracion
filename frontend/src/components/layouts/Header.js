import React, { Fragment } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header = ({user_id,setUser, setUserData, userData}) => {
    

    return (
        <Fragment>
            <TopBar user_id = {user_id} setUser = {setUser} setUserData={setUserData} userData={userData}/>
            <NavBar />
        </Fragment>
    );
}

export default Header;
