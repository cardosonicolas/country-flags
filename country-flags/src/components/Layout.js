import { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./Navbar";

const LIGHT = "light",
  DARK = "dark";

const themes = {
  [DARK]: {
    background: "hsl(207, 26%, 17%)",
    elements: "hsl(209, 23%, 22%)",
    text: "hsl(0, 0%, 100%)",
    box_shadow: "0px 0px 8px 0px rgb(0 0 0 / 50%) ",
  },

  [LIGHT]: {
    background: "hsl(0, 0%, 98%)",
    elements: "hsl(0, 0%, 100%)",
    text: "hsl(200, 15%, 8%)",
    box_shadow: "0px 0px 10px 0px rgb(59 59 59 / 8%)",
  },
};

function useDarkTheme() {
  const [theme, setTheme] = useState(LIGHT);

  const toggleTheme = () => {
    if (theme === LIGHT) {
      setTheme(DARK);
      window.localStorage.setItem(DARK, DARK);
    } else {
      setTheme(LIGHT);
      window.localStorage.setItem(DARK, LIGHT);
    }
  };

  useEffect(() => {
    const theme = window.localStorage.getItem(DARK);
    if (theme !== null) {
      setTheme(theme);
    } else {
      window.localStorage.setItem(DARK, LIGHT);
    }
  }, []);

  return [theme, toggleTheme];
}

function Layout({ children }) {
  const [theme, toggleTheme] = useDarkTheme();

  return (
    <ThemeProvider theme={themes[theme]}>
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
