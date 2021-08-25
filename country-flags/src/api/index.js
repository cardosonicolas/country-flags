const API_URL = "https://restcountries.eu/rest/v2/";

export function getCountries(name = "", region = "") {
  const endpoint = getEndpoint(name, region);
  const fieldsParams = "?fields=name;capital;region;flag;population";

  return fetch(API_URL + endpoint + fieldsParams)
    .then((r) => {
      if (r.status >= 400) {
        const error = new Error();
        error.error = { status: r.status };
        throw error;
      }
      return r;
    })
    .then((r) => r.json());
}

function getEndpoint(name, region) {
  if (name) {
    return `name/${name}`;
  }
  if (region) {
    return `region/${region}`;
  }
  return "all";
}
