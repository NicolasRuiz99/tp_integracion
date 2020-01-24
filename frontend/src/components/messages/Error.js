import React from 'react';

const Error = ({texto}) => {
    return (
        <div className="alert alert-danger mt-2 mb-5 text-center">{texto}</div> 
    );
}

export default Error;
