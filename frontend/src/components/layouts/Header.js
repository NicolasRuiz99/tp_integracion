import React, { Fragment } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';

const Header = ({user_id,setUser, isLogged, setIsLogged, handleDrop, setSearch, search}) => {
    

    return (
        <Fragment>
            <TopBar user_id = {user_id} setUser = {setUser}  isLogged={isLogged} setIsLogged={setIsLogged} handleDrop={handleDrop} />
            <NavBar search={search} setSearch={setSearch}/>
        </Fragment>
    );
}

export default Header;
