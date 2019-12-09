import React from 'react';
import {Link} from 'react-router-dom';

const BreadCrumbs = (props) => {
    return (
        <div id="heading-breadcrumbs" className="brder-top-0 border-bottom-0">
        <div className="container">
          <div className="row d-flex align-items-center flex-wrap">
            <div className="col-md-7">
              <h1 className="h2">{props.name}</h1>
            </div>
            <div className="col-md-5">
              <ul className="breadcrumb d-flex justify-content-end">
                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active">{props.name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BreadCrumbs;
