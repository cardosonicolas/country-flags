import styled, { createGlobalStyle } from "styled-components";

function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Content>{children}</Content>
    </>
  );
}

const Content = styled.div``;

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
      background-color: hsl(0, 0%, 98%);
      font-family: "Nunito Sans", sans-serif;
}

#root {
      margin-top: 0;
}

a {
      text-decoration: none;
}
a:visited {
      text-decoration: none;
}
a:hover {
      text-decoration: underline;
}
a:active {
      text-decoration: underline;
}


`;

export default Layout;
