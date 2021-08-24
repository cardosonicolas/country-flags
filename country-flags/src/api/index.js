const API_URL = "https://restcountries.eu/rest/v2/";

export function getCountries(name = "") {
  const endpoint = name ? `name/${name}` : "all";
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
