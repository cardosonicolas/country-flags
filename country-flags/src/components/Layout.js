import { useEffect, useState } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import Navbar from "./Navbar";

const darkTheme = {
  background: "hsl(207, 26%, 17%)",
  elements: "hsl(209, 23%, 22%)",
  text: "hsl(0, 0%, 100%)",
};

const lightTheme = {
  background: "hsl(0, 0%, 98%)",
  elements: "hsl(0, 0%, 100%)",
  text: "hsl(200, 15%, 8%)",
};

function useDarkTheme() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("dark", "dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("dark", "light");
    }
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("dark");
    if (theme !== null) {
      setTheme(theme);
    } else {
      window.localStorage.setItem("dark", "light");
    }
  }, []);

  return [theme, toggleTheme];
}

function Layout({ children }) {
  const [theme, toggleTheme] = useDarkTheme();

  return (
    <ThemeProvider theme={theme !== "light" ? darkTheme : lightTheme}>
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
      background-color: ${(props) => props.theme.background};
      font-family: "Nunito Sans", sans-serif;
      color: ${(props) => props.theme.text};
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
