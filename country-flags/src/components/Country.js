import styled from "styled-components";

function Country({ name, capital, region, flag, population }) {
  return (
    <Div>
      <Img src={flag} alt={`${name} flag`} />
      <h2>{name}</h2>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
    </Div>
  );
}

const Div = styled.div`
  width: 300px;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
`;
const Img = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;

export default Country;
