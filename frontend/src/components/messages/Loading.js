import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
    return (
        <div className="col-md-9 text-center"> 
            <Spinner animation="border" variant="info" size="lg"  />
        </div>
    );
}

export default Loading;