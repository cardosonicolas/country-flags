import styled from "styled-components";
import { devices } from "../utils";

const Country = ({ name, capital, region, flags, population }) => {
  let defaulFlag = ""; //TODO: Import svg flag
  return (
    <Card>
      <Flag src={flags?.svg || defaulFlag} alt={`${name} flag`} />
      <Description>
        <Name>{name}</Name>
        <Properties>
          <Property>
            <PropertyName>Population: </PropertyName>
            {population && population.toLocaleString()}
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
};

const Card = styled.div`
  width: auto;
  padding-bottom: 1em;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.elements};

  box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 15%);
  -webkit-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 15%);
  -moz-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 15%);
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
  font-size: 2em;
  font-weight: 800;

  @media ${devices.tablet} {
    font-size: 1em;
  }
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
