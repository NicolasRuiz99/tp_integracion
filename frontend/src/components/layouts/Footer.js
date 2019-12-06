import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Footer = () => {
 
    return (
       <FooterContainer  className="main-footer">
         <div className="footer-middle">
         <div className="container">
           <div className="row">
             {/* Columna 1 */}
             <div className="col-md-3 col-sm-6">
               <h4>lorem ipsum</h4>
               <ul className="list-unstyled">
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
               </ul>
             </div>
              {/* Columna 2 */}
              <div className="col-md-3 col-sm-6">
               <h4>lorem ipsum</h4>
               <ul className="list-unstyled">
                <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
               </ul>
             </div>
              {/* Columna 3 */}
              <div className="col-md-3 col-sm-6">
               <h4>lorem ipsum</h4>
               <ul className="list-unstyled">
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
               </ul>
             </div>
              {/* Columna 4 */}
              <div className="col-md-3 col-sm-6">
               <h4>lorem ipsum</h4>
               <ul className="list-unstyled">
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
                 <li><Link to="/">lorem ipsum</Link></li>
               </ul>
             </div>
           </div>
           {/* Abajo del footer */}
           <div className="footer-bottom">
             <p className="text-xs-center">
               &copy;{new Date().getFullYear()} Indumentaria Online - Todos los derechos reservados
             </p>
           </div>
         </div>
         </div>
       </FooterContainer>
      
    )
  }

export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;