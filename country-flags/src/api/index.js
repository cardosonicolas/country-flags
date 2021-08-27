import { fetch } from "../utils";
const API_URL = "https://restcountries.eu/rest/v2/";

export function getCountries(filters) {
  const fieldsParams = "?fields=name;capital;region;flag;population;alpha3Code";
  const endpoint = getEndpoint(filters);

  return fetch(API_URL + endpoint + fieldsParams);
}

export function getCountry(id) {
  const fieldsParams =
    "?fields=name;capital;region;subregion;flag;population;alpha3Code;borders;languages;nativeName;currencies;topLevelDomain";

  return fetch(API_URL + "alpha/" + id + fieldsParams).then(async (country) => {
    const borders = await getBorderCountries(country.borders);
    return { ...country, borders };
  });
}

function getBorderCountries(codes) {
  const fieldsParams = "&fields=name;alpha3Code";
  const codesStr = codes.join(";");
  return fetch(API_URL + `alpha?codes=${codesStr}` + fieldsParams);
}

function getEndpoint({ name, region }) {
  if (name) {
    return `name/${name}`;
  }
  if (region) {
    return `region/${region}`;
  }
  return "all";
}
