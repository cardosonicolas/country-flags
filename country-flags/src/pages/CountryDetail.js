import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "wouter";
import Layout from "../components/Layout";
import { getCountry } from "../api";
import arrow from "../static/images/icon-left-arrow.svg";
import { devices } from "../utils";

const Property = ({ name, value }) => {
  return (
    <Wrapper>
      <PropertyName>{name}: </PropertyName>
      {value}
    </Wrapper>
  );
};

const CountryDetail = ({ id }) => {
  const [country, setCountry] = useState({});

  useEffect(() => {
    getCountry(id).then((r) => {
      setCountry(r);
    });
  }, [id]);

  const {
    capital,
    flags,
    name,
    nativeName,
    population,
    region,
    subregion,
    currencies,
    topLevelDomain,
    languages,
  } = country;

  const handleClick = () => {
    window.history.back();
  };

  return (
    <Layout>
      <Container>
        <Back onClick={handleClick}>
          <Arrow></Arrow>
          Back
        </Back>
        <Card>
          <Flag src={flags && flags.svg} alt={`Flag from ${name}`} />
          <Description>
            <Name>{name}</Name>
            <Properties>
              <Property name="Nativo Name" value={nativeName} />
              <Property
                name="Population"
                value={population && population.toLocaleString()}
              />
              <Property name="Region" value={region} />
              <Property name="Sub Region" value={subregion} />
              <Property name="Capital" value={capital} />
              <Property name="Region" value={region} />

              <br />
              <Property name="Top Level Domain" value={topLevelDomain} />
              <Property
                name="Currencies"
                value={
                  currencies && currencies.map(({ name }) => name).join(", ")
                }
              />
              <Property
                name="Languages"
                value={
                  languages && languages.map(({ name }) => name).join(", ")
                }
              />
            </Properties>
            {!!country.borders?.length && (
              <>
                <h2>Border Countries</h2>
                <Borders>
                  {country.borders.map(({ name, alpha3Code: id }) => (
                    <Link href={`/country/${id}`} key={name}>
                      <a href="/">
                        <Border>{name}</Border>
                      </a>
                    </Link>
                  ))}
                </Borders>
              </>
            )}
          </Description>
        </Card>
      </Container>
    </Layout>
  );
};

export default CountryDetail;

const Back = styled.button`
  display: flex;
  justify-content: center;
  padding: 0.5em 1em;
`;

const Arrow = styled.div`
  background-color: transparent;

  /* Size */
  height: 0.5em;
  width: 0.5em;

  background-image: url(${arrow});

  //   border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  //   border-left: 1px solid rgba(0, 0, 0, 0.3);
  //   transform: translateX(25%) rotate(45deg);
`;

const Container = styled.div`
  padding: 0 1em;
`;

const Card = styled.div`
  @media ${devices.laptop} {
    display: flex;
  }
`;

const Flag = styled.img`
  width: 100%;
  height: auto;
`;

const Name = styled.div`
  font-size: 1.7em;
  font-weight: 800;
`;

const Description = styled.div``;

const Properties = styled.div`
  & > * {
    margin-top: 1em;
  }
`;

const Wrapper = styled.div`
  font-weight: 300;
`;

const PropertyName = styled.span`
  font-weight: 600;
`;

const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  & > * {
    margin-top: 0;
    margin-bottom: 1em;
    min-width: 30%;
    color: hsl(200, 15%, 8%);
  }

  & > * + * {
    margin-left: 1em;
  }
`;

const Border = styled.div`
  padding: 1em;
  text-align: center;

  box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 8%);
  -webkit-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 8%);
  -moz-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 8%);
`;
