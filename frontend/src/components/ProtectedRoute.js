import React from 'react';
import {Route, Redirect} from 'react-router-dom';


export const ProtectedRoute2 = ({component: Component, isLogged, role, ...rest}) => {
    return (
        <Route
        {...rest} 
        render={
            (props) => {
                if (isLogged && role) {
                    return <Component {...props} />
                }else {
                    return <Redirect to={{
                        pathName: "/",
                        state: {
                            from: props.location
                        }}
                    }/>
                } 
            }
        }/>
    )
}
