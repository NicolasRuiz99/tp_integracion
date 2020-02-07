import React from 'react';
import {Route, Redirect} from 'react-router-dom';

export const ProtectedRoute = ({component: Component, isLogged, role}) => {
    return (
        <Route 
        render={
            (props) => {
                if (isLogged && role === false) {
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

export const ProtectedRoute2 = ({component: Component, isLogged, role}) => {
    return (
        <Route 
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
