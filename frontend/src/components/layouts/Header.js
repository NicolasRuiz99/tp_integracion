import React, { Fragment, useState } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header = () => {
    

    return (
        <Fragment>
            <TopBar/>
            <NavBar />
        </Fragment>
    );
}

export default Header;
