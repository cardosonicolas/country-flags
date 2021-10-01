import styled from "styled-components";
import { Link } from "wouter";

import { devices } from "../utils";

const Navbar = () => {
  return (
    <Nav>
      <Link href={"/"}>
        <Title>Where in the world?</Title>
      </Link>
      <div>Dark Mode</div>
    </Nav>
  );
};

export default Navbar;

const Wrapper = styled.div`
  display: block;
  width: 90%;
  max-width: 1000px;
  margin: 1em auto;

  @media ${devices.laptop} {
    max-width: 1300px;
  }
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0 1em;
  background-color: hsl(0, 0%, 100%);
  height: 5em;
`;

const Title = styled.a`
  font-size: 1em;
  font-weight: 800;
  color: hsl(0, 0%, 0%);
  text-decoration: none;

  &:visited {
    text-decoration: none;
  }

  &:hover,
  &:active {
    text-decoration: underline;
  }
`;

const ThemeMode = styled.div``;
