import { useEffect, useState } from "react";
import { getCountry } from "../api";
import { Link } from "wouter";
import Layout from "../components/Layout";

function CountryDetail({ id }) {
  const [country, setCountry] = useState({});

  useEffect(() => {
    getCountry(id).then((r) => {
      setCountry(r);
    });
  }, [id]);

  return (
    <Layout>
      <h1>{country.name && country.name}</h1>
      {country.borders &&
        country.borders.map(({ name, alpha3Code: id }) => (
          <Link href={`/country/${id}`} key={name}>
            <a href="/">{name}</a>
          </Link>
        ))}
    </Layout>
  );
}

export default CountryDetail;
