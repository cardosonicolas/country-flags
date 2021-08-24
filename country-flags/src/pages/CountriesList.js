import { useEffect, useState } from "react";
import { getCountries } from "../api";
import Country from "../components/Country";
import { getErrorText } from "../utils";

function CountriesList() {
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    getCountries(name)
      .then((data) => {
        setCountries(data);
        setError();
      })
      .catch((err) => {
        setError(err);
      });
  }, [name]);

  return (
    <div>
      <input type="text" onChange={handleChange} />
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
