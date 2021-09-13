import { useEffect, useState } from "react";
import { Link } from "wouter";
import styled from "styled-components";
import Country from "../components/Country";
import Select from "../components/Select";
import Layout from "../components/Layout";
import { getCountries } from "../api";
import { getErrorText } from "../utils";

const REGIONS = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

function CountriesList() {
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
      <Filters>
        <input
          type="text"
          onChange={handleNameChange}
          value={filters.name || ""}
        />
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
            ({ name, capital, region, flag, population, alpha3Code: id }) => (
              <Link href={`/country/${id}`} key={name}>
                <CountryItem>
                  <a>
                    <Country
                      name={name}
                      capital={capital}
                      region={region}
                      flag={flag}
                      population={population}
                    />
                  </a>
                </CountryItem>
              </Link>
            )
          )}
        </Countries>
      )}
    </Layout>
  );
}

export default CountriesList;

const Filters = styled.div`
  padding: 0 0.5em;
  & > * {
    display: block;
  }
`;

const Countries = styled.div`
  padding: 0 1.5em;
`;

const CountryItem = styled.div``;

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
