import { useEffect, useState } from "react";
import { getCountries } from "../api";
import Country from "../components/Country";

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

  return countries.map(({ name, capital, region, flag, population }) => (
    <Country
      name={name}
      capital={capital}
      region={region}
      flag={flag}
      population={population}
    />
  ));
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
