import { useEffect, useState } from "react";
import Country from "../components/Country";
import Select from "../components/Select";
import { getCountries } from "../api";
import { getErrorText } from "../utils";

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
        options={["Americas", "Europe", "Africa"]}
        placeholder="Filter by Region"
        clear={!filters.region}
      />
      {error
        ? getErrorText(error)
        : countries.map(({ name, capital, region, flag, population }) => (
            <Country
              key={name}
              name={name}
              capital={capital}
              region={region}
              flag={flag}
              population={population}
            />
          ))}
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
