import React from 'react';
import {Link} from 'react-router-dom';

const BreadCrumbs = (props) => {
    return (
        <div id="heading-breadcrumbs" className="border-top-0 border-bottom-0">
        <div className="container">
          <div className="row d-flex align-items-center flex-wrap">
            <div className="col-md-7">
              <h1 className="h2">{props.name}</h1>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BreadCrumbs;
