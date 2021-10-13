import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "wouter";

import { getCountry } from "../api";
import { devices } from "../utils";

import Layout from "../components/Layout";
import ArrowIcon from "../components/ArrowIcon";

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

  const handleClickBack = () => {
    window.history.back();
  };

  return (
    <Layout>
      <Container>
        <Buttom onClick={handleClickBack}>
          <ArrrowIconWrapper>
            <ArrowIcon />
          </ArrrowIconWrapper>
          <ButtomText>Back</ButtomText>
        </Buttom>

        <Card>
          <Flag src={flags && flags.svg} alt={`Flag from ${name}`} />
          <Description>
            <Name>{name}</Name>
            <Properties>
              <div>
                <Property name="Nativo Name" value={nativeName} />
                <Property
                  name="Population"
                  value={population && population.toLocaleString()}
                />
                <Property name="Region" value={region} />
                <Property name="Sub Region" value={subregion} />
                <Property name="Capital" value={capital} />
              </div>
              <div>
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
              </div>
            </Properties>
            {!!country.borders?.length && (
              <>
                <Borders>
                  <Title>Border Countries: </Title>
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

const ArrrowIconWrapper = styled.div`
  width: 1.5em;
  margin: 0 auto;
`;

const ButtomText = styled.span`
  align-self: center;
`;

const Buttom = styled.div`
  display: flex;
  width: 8em;
  padding: 0.5em 2em;
  border-radius: 5px;
  box-shadow: ${({ theme }) => theme.box_shadow};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  & > * {
    margin-top: 0;
  }
`;

const Container = styled.div`
  display: block;
  width: 90%;
  max-width: 1000px;
  margin: 1em auto;

  @media ${devices.laptop} {
    max-width: 1300px;
  }
`;

const Card = styled.div`
  @media ${devices.laptop} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5em;
    align-items: start;
    justify-content: center;
  }
`;

const Flag = styled.img`
  width: 100%;
  height: auto;

  @media ${devices.laptop} {
    object-fit: cover;
  }
`;

const Name = styled.div`
  font-size: 1.7em;
  font-weight: 800;
`;

const Description = styled.div``;

const Properties = styled.div`
  & > * {
    margin-top: 2em;
  }

  @media ${devices.laptop} {
    display: flex;
    gap: 2em;
    margin-top: 0;
  }
`;

const Wrapper = styled.div`
  font-size: 0.8em;
  font-weight: 300;
  margin-top: 1em;
`;

const PropertyName = styled.span`
  font-weight: 600;
`;

const Title = styled.h2`
  font-size: 1em;
  width: 100%;

  @media ${devices.laptop} {
    width: 0;
    font-size: 0.8em;
  }
`;

const Borders = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3em;
  justify-content: center;

  & > * {
    margin-top: 0;
    margin-bottom: 1em;
    min-width: 30%;
  }

  & > * + * {
    margin-left: 0.5em;
  }

  @media ${devices.laptop} {
    justify-content: start;
    align-items: baseline;

    & > * {
      min-width: 20%;
    }

    & > * + * {
      margin-left: 0.5em;
    }
  }
`;

const Border = styled.div`
  padding: 0.5em;
  text-align: center;
  background-color: ${({ theme }) => theme.elements};

  box-shadow: ${({ theme }) => theme.box_shadow};

  @media ${devices.laptop} {
    padding: 0.5em 1em;
    font-size: 12px;
  }
`;
