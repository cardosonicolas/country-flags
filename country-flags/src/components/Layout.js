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

@font-face{
      font-family: "Nunito Sans", sans-serif;
      src: url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap');
}

body {
  background-color: hsl(0, 0%, 98%);
  display: flex;
  justify-content: center;
  font-family: "Nunito Sans", sans-serif;
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
