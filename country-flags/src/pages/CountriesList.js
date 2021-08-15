import { useEffect, useState } from "react";

function getCountries() {
  return fetch("https://restcountries.eu/rest/v2/all").then((response) =>
    response.json()
  );
}

function CountriesList() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getCountries()
      .then((data) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  return countries.map((country) => <p>{country.name}</p>);
}

export default CountriesList;
