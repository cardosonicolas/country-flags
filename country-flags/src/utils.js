export const devices = {
  tablet: "(min-width: 768px)",
  laptop: "(min-width: 1024px)",
  wide: "(min-width: 1600px)",
};

export const getErrorText = (err) => {
  const STATUS_CODE_ERROR_MAP = {
    404: "No se encontraron paises",
    500: "No se pudo contactar al servidor",
  };
  return STATUS_CODE_ERROR_MAP[err.error.status];
};

export function fetch(url) {
  return window.fetch(url).then(checkResponse);
}

async function checkResponse(r) {
  const data = await r.json();
  if (r.status >= 400 || data.status >= 400) {
    const error = new Error();
    error.error = { status: data.status || r.status };
    throw error;
  }
  return data;
}
