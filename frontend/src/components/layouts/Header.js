import React, { Fragment } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header = ({user_id,setUser, isLogged, setIsLogged, handleDrop}) => {
    

    return (
        <Fragment>
            <TopBar user_id = {user_id} setUser = {setUser}  isLogged={isLogged} setIsLogged={setIsLogged} handleDrop={handleDrop} />
            <NavBar />
        </Fragment>
    );
}

export default Header;
