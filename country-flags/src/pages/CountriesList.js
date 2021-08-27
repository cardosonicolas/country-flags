import { useEffect, useState } from "react";
import { Link } from "wouter";
import Country from "../components/Country";
import Select from "../components/Select";
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
    <div>
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
      {error
        ? getErrorText(error)
        : countries.map(
            ({ name, capital, region, flag, population, alpha3Code: id }) => (
              <Link href={`/country/${id}`} key={name}>
                <a>
                  <Country
                    name={name}
                    capital={capital}
                    region={region}
                    flag={flag}
                    population={population}
                  />
                </a>
              </Link>
            )
          )}
    </div>
  );
}

export default CountriesList;

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
