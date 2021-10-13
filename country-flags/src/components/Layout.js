import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./Navbar";
import { useTheme } from "../hooks";

function Layout({ children }) {
  const [theme, toggleTheme] = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar onChangeTheme={toggleTheme} theme={theme} />
      <Content>{children}</Content>
    </ThemeProvider>
  );
}

const Content = styled.div`
  margin-bottom: 3em;
`;

const GlobalStyle = createGlobalStyle`

:root {
      font-size: 16px;
}

* + * {
      margin-top: 1.5em;
}

*,
  *:before,
  *:after {
    box-sizing: border-box;
  }

@font-face{
      font-family: "Nunito Sans", sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
}

body {
      margin: 0;
      padding: 0;
      background-color: ${({ theme }) => theme.background};
      font-family: "Nunito Sans", sans-serif;
      color: ${({ theme }) => theme.text};
      // transition: background-color 0.5s;
}

#root {
      margin-top: 0;
}

a {
      color: inherit;

      text-decoration: none;

      &:visited {
            text-decoration: none;
      }

      &:hover, &:active  {
            text-decoration: underline;
      }
}

select {
    color: inherit;
}

input { 
      color: inherit;
}

`;

export default Layout;
