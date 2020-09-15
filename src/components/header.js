import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const NavBar = styled.nav`
 
`;

const Header = ({ siteTitle }) => (
  // <header
  //   style={{
  //     background: `rebeccapurple`,
  //     marginBottom: `1.45rem`,
  //   }}
  // >
  //   <div
  //     style={{
  //       margin: `0 auto`,
  //       maxWidth: 960,
  //       padding: `1rem`,
  //     }}
  //   >
  //     <h1 style={{ margin: 0 }}>
  //       <Link
  //         to="/"
  //         style={{
  //           color: `white`,
  //           textDecoration: `none`,
  //         }}
  //       >
  //         {siteTitle}
  //       </Link>
  //     </h1>
  //   </div>
  // </header>
  <NavBar className="navbar  is-primary" role="navigation" aria-label="main navigation">
    
           <Link
          to="/"
          style={{
            color: `blue`,
            textDecoration: `none`,
            letterSpacing:`loose`,
            fontWeight:`bold`,
            fontSize:`big`
          }}
        >
          Companiesinn
        </Link>

       <a
                className="navbar-item"
               style={{color:`grey`, size:`smaller`}}
              >
                
                   <Link
          to="/page-2/"
          style={{
            color: `grey`,
            textDecoration: `none`,
            letterSpacing:`loose`,
            fontWeight:`bold`,
            fontSize:`big`
          }}
        >
          Sign Up
        </Link>
               
              </a>
  </NavBar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
