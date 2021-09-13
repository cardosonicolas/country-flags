import styled from "styled-components";

function Country({ name, capital, region, flag, population }) {
  return (
    <div>
      <Img src={flag} alt={`${name} flag`} />
      <div>
        <h2>{name}</h2>
        <p>
          <strong>Population:</strong> {population}
        </p>
        <p>
          <strong>Region: </strong>
          {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
      </div>
    </div>
  );
}

const Div = styled.div`
  width: 300px;
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  color: hsl(200, 15%, 8%);
  margin-bottom: 2em;
`;

const Img = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 10px 10px 0 0;
`;

const P = styled.p`
  line-height: 1;
`;

export default Country;
