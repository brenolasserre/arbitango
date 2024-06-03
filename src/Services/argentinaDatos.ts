import exchanges from "../data/exchanges.json";

const apiEndpoint = "https://api.argentinadatos.com/v1/finanzas/rendimientos/";

/* Respuesta API:
[
  {
    "entidad": "buenbit",
    "rendimientos": [
      {
        "moneda": "ARS",
        "apy": 0,
      },
      {
        ... More coins
      }
     ]
    },
    ...
]
*/

const getPFData = async () => {
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  return data;
};

export const getPFInvestments = async () => {
  const data = await getPFData();

  const exchangeNames = new Set(
    exchanges.map((exchange) => exchange.nombre.toLowerCase())
  );

  const filteredData = data.filter((item: any) =>
    exchangeNames.has(item.entidad)
  );

  return filteredData;
};
