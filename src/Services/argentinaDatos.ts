// import coins from "../data/coins.json";

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
]
*/

const getPFData = async () => {
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  return data;
};

export const getPFInvestments = async () => {
  const data = await getPFData();
  return data;
};
