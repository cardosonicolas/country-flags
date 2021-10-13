import { useEffect, useState } from "react";
import { getCountries as getCountriesAPI } from "../api";

const getCountriesFromStorage = () => {
  const data = sessionStorage.getItem("data");
  const countries = JSON.parse(data);

  return Promise.resolve(countries);
};

export function useCountries() {
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
    const getCountries =
      sessionStorage.getItem("data") && !filters.name && !filters.region
        ? getCountriesFromStorage
        : getCountriesAPI;

    getCountries(filters)
      .then((data) => {
        setCountries(data);
        sessionStorage.setItem("data", JSON.stringify(data));
        setError();
      })
      .catch((err) => {
        setError(err);
      });
  }, [filters]);

  return { countries, filters, error, handleNameChange, handleRegionChange };
}
