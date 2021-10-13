import styled from "styled-components";
import { Link } from "wouter";
import { getErrorText } from "../utils";
import Country from "../components/Country";
import Select from "../components/Select";
import SearchIcon from "../components/SearchIcon";
import { devices } from "../utils";
import { useCountries } from "../hooks";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

const CountriesList = () => {
  const { countries, filters, error, handleNameChange, handleRegionChange } =
    useCountries();

  return (
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
            ({ name, capital, region, flags, population, alpha3Code: id }) => (
              <div key={id}>
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
              </div>
            )
          )}
        </Countries>
      )}
    </Wrapper>
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

  background-color: ${({ theme }) => theme.elements};
  box-shadow: ${({ theme }) => theme.box_shadow};

  &::placeholder {
    color: hsl(0, 0%, 52%);
  }
`;
