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
  padding: 0 1em;
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background-color: ${(props) => props.theme.elements};
`;

const Title = styled.a`
  font-size: 1em;
  font-weight: 800;
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
