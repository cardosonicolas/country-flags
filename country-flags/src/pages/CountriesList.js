import { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "wouter";
import { getCountries } from "../api";
import { getErrorText } from "../utils";
import Country from "../components/Country";
import Layout from "../components/Layout";
import Select from "../components/Select";
import img from "../static/images/icon-search.svg";
import SearchIcon from "../components/SearchIcon";
import { devices } from "../utils";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const CountriesList = () => {
  const [countries, setCountries] = useState([]);
  const [filters, setFilters] = useState({});
  const [error, setError] = useState(null);

  const handleNameChange = (e) => {
    setFilters({ name: e.target.value });
  };

  const handleRegionChange = (e) => {
    setFilters({ region: e.target.value });
  };

  useEffect(() => {
    getCountries(filters)
      .then((data) => {
        setCountries(data);
        setError();
      })
      .catch((err) => {
        setError(err);
      });
  }, [filters]);

  return (
    <Layout>
      <Wrapper>
        <Filters>
          <SearchBar>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <Search
              type="text"
              onChange={handleNameChange}
              placeholder="Search for a country..."
              value={filters.name || ""}
            />
          </SearchBar>
          <Select
            onChange={handleRegionChange}
            options={REGIONS}
            placeholder="Filter by Region"
            clear={!filters.region}
          />
        </Filters>
        {error ? (
          getErrorText(error)
        ) : (
          <Countries>
            {countries.map(
              ({
                name,
                capital,
                region,
                flags,
                population,
                alpha3Code: id,
              }) => (
                <Link href={`/country/${id}`} key={name}>
                  <a>
                    <Country
                      name={name}
                      capital={capital}
                      region={region}
                      flags={flags}
                      population={population}
                    />
                  </a>
                </Link>
              )
            )}
          </Countries>
        )}
      </Wrapper>
    </Layout>
  );
};

export default CountriesList;

const Filters = styled.div`
  & > * {
    display: block;
  }

  @media ${devices.laptop} {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
`;

const Wrapper = styled.div`
  display: block;
  width: 90%;
  max-width: 1000px;
  margin: 1em auto;

  @media ${devices.laptop} {
    max-width: 1300px;
  }
`;

const Countries = styled.div`
  @media ${devices.tablet} {
    & > * {
      margin: 0;
    }
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1em;
  }

  @media ${devices.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const SearchBar = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media ${devices.laptop} {
    width: 40%;
  }
`;

const SearchIconWrapper = styled.div`
  position: absolute;
  margin: 0 1em;
  width: 1em;
  height: 1em;
  backgound-repeat: no-repeat;
  background-size: contain;
`;

const Search = styled.input`
  height: 3.5em;
  width: 100%;
  margin-top: 0;
  padding: 0 3em;
  border: none;
  border-radius: 3px;
  outline: 0;

  background-color: ${(props) => props.theme.elements};
  box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 8%);
  -webkit-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 8%);
  -moz-box-shadow: 0px 0px 10px 0px rgb(59 59 59 / 8%);

  &::placeholder {
    color: hsl(0, 0%, 52%);
  }

  @media ${devices.laptop} {
  }
`;

//   useEffect(() => {
//     async function getData() {
//       try {
//         const data = await getCountries();
//         setCountries(data.default);
//       } catch (err) {
//         console.log(err);
//       }
//     }
//     getData();
//   }, []);

//   return null;
