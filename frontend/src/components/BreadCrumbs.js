import React, { Fragment } from 'react';
import {withRouter, Link} from 'react-router-dom';

const BreadCrumbs = ({name, isAdmin, history}) => {
    return (
      <Fragment>
            <div id={`${(isAdmin) ? 'heading-breadcrumbs2' : 'heading-breadcrumbs'}`} className="border-top-0 border-bottom-0">
            <div className="container">
              <div className="row d-flex align-items-center flex-wrap">
                <div className="col-md-1">
                <Link onClick={history.goBack} ClassName="float-left" style={{color:'black'}} title="Volver" ><i className="fas fa-arrow-circle-left fa-lg" ></i></Link>
                </div>
                <div className="col-md-7">
                  <h1 className="h2">{name}</h1>
                </div>
              </div>
            </div>
          </div>
      </Fragment>
    );
}

export default withRouter(BreadCrumbs);
