import { useEffect, useState } from "react";
import { getCountry } from "../api";

function CountryDetail({ id }) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    getCountry(id).then((r) => {
      console.log(r);
      setCountry(r);
    });
  }, []);

  return (
    <>
      <h1>{country.name && country.name}</h1>
      {country.borders &&
        country.borders.map(({ name, code }) => <h2>{name}</h2>)}
    </>
  );
}

export default CountryDetail;
