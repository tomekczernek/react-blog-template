import {Link} from "react-router-dom";
import styled from "styled-components";

const Nav = ({ className }) => {
  return (
    <div className={className}>
      <NavContainer>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
      </NavContainer>
    </div>
  );
};

const NavLink = styled(Link)`
  padding: 20px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    background: #eb3b5a;
  }
`;

const NavContainer = styled.div`
  max-width: 1220px;
  width: 100%;
  padding: 20px 0;
  margin-right: auto;
  margin-left: auto;
`;

const NavStyled = styled(Nav)`
  background-color: #fc5c65;
  width: 100%;
  display: flex;
  z-index: 1000;
  justify-content: flex-start;
  position: fixed;
`;

export default NavStyled;
