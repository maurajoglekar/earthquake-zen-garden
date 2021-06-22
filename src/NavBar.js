import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';
import styled from 'styled-components';
import colors from './utils/colors';

const StyledNav = styled.nav`
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  background: ${colors.grey01};
  list-style-type: none;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;

  a {
      margin: 24px;
      font-weight: bold;
  }

  a:link {
    color:  ${colors.purple}
  }

  a img {
    height: 40px;
    width: 40px;
  }

  p {
      font-size: 30px;
      color: ${colors.grey02};
      font-weight: bold;
  }
`;

const NavBar = () => (
        <StyledNav>
        <Link to="/">
          <img alt="realtor-logo" src={data.site.logoImage} />
        </Link>
        <p>{data.site.title}</p>
        <Link to="/profile">{`Welcome ${data.profile.firstName}`}</Link>
    </StyledNav>
);

export default NavBar;