import styled from "styled-components";

function Country({ name, capital, region, flag, population }) {
  return (
    <Card>
      <Flag src={flag} alt={`${name} flag`} />
      <Description>
        <Name>{name}</Name>
        <Properties>
          <Property>
            <PropertyName>Population: </PropertyName>
            {population.toLocaleString()}
          </Property>
          <Property>
            <PropertyName>Region: </PropertyName>
            {region}
          </Property>
          <Property>
            <PropertyName>Capital: </PropertyName>
            {capital}
          </Property>
        </Properties>
      </Description>
    </Card>
  );
}

const Card = styled.div`
  border-radius: 10px;
  background-color: hsl(0, 0%, 100%);
  color: hsl(200, 15%, 8%);

  box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 33%);
  -webkit-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 33%);
  -moz-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 33%);
`;

const Flag = styled.img`
  width: 100%;
  height: 11rem;
  object-fit: cover;
  border-radius: 10px 10px 0 0;
`;

const Description = styled.div`
  margin-top: 0;
  padding: 1.5em 1.5em 2em 1.5em;
`;

const Name = styled.div`
  font-size: 1.3em;
  font-weight: 800;
`;

const Properties = styled.div`
  & > * {
    margin-top: 0.5em;
  }
`;

const Property = styled.div`
  font-weight: 300;
`;

const PropertyName = styled.span`
  font-weight: 600;
`;

export default Country;
