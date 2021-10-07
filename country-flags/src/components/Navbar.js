import styled from "styled-components";
import { Link } from "wouter";

import { devices } from "../utils";

const Navbar = ({ onChangeTheme, theme }) => {
  return (
    <Wrapper>
      <Nav>
        <Link href={"/"}>
          <Title>Where in the world?</Title>
        </Link>
        <ThemeMode
          onClick={() => {
            onChangeTheme();
          }}
        >
          {theme !== "light" ? "Light" : "Dark"} Mode
        </ThemeMode>
      </Nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: block;
  background-color: ${(props) => props.theme.elements};
`;

const Nav = styled.div`
  padding: 2em 1em;
  margin: 0 auto;
  max-width: 1000px;
  display: flex;
  justify-content: space-between;

  @media ${devices.laptop} {
    max-width: 90%;
    padding: 2em 0;
  }

  @media ${devices.wide} {
    max-width: 1300px;
  }
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

const ThemeMode = styled.div`
  margin-top: 0;
  cursor: pointer;
`;
