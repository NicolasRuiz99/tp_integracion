import React, { Fragment, useState } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header = ({user_id,setUser}) => {
    

    return (
        <Fragment>
            <TopBar user_id = {user_id} setUser = {setUser}/>
            <NavBar />
        </Fragment>
    );
}

export default Header;
