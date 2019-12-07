import React, { Fragment } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header = () => {
    return (
        <Fragment>
            <TopBar />
            <NavBar />
        </Fragment>
    );
}

export default Header;
