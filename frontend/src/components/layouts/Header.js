import React, { Fragment } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import TopBarAdmin from './TopBarAdmin';

const Header = ({user_id,setUser, isLogged, setIsLogged, handleDrop, setSearch, search, isOferta, setRole, role}) => {
    

    return (
        <Fragment>
            {(role) ? (<TopBarAdmin user_id = {user_id} setUser = {setUser}  isLogged={isLogged} setIsLogged={setIsLogged} handleDrop={handleDrop} setRole={setRole}/>) :
            <TopBar user_id = {user_id} setUser = {setUser}  isLogged={isLogged} setIsLogged={setIsLogged} handleDrop={handleDrop} setRole={setRole} />}
            {(role) ? null : <NavBar search={search} setSearch={setSearch} isOferta={isOferta}/> }
        </Fragment>
    );
}

export default Header;
