export const getErrorText = (err) => {
  const STATUS_CODE_ERROR_MAP = {
    404: "No se encontraron paises",
    500: "No se pudo contactar al servidor",
  };
  return STATUS_CODE_ERROR_MAP[err.error.status];
};
