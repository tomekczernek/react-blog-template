import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = ({ className }) => {
  return (
    <div className={className}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
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

const NavStyled = styled(Nav)`
  background-color: #fc5c65;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  position: fixed;
`;

export default NavStyled;
