import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const LoadingDark = () => {
    return (
        <div className="col-md-12 text-center" style={{top:'50%',left:'5%', position: 'fixed'}}> 
            <Spinner animation="border" variant="dark" size="lg" role="status" />
        </div> 
    );
}

export default LoadingDark;