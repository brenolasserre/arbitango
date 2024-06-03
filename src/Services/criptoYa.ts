import { getDolar } from "./dolar";
import exchanges from "../data/exchanges.json";
import coins from "../data/coins.json";

const generateApiEndpoint = (ticker: string) => {
  return `https://criptoya.com/api/${ticker}/ars/0.5`;
};

const fetchApiData = async (endpoint: string) => {
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

const filterDataByExchangesWithTickerAsParent = (
  data: any,
  dataCrypto: number
) => {
  const exchangeNames = exchanges.map((exchange) =>
    exchange.nombre.toLowerCase()
  );
  const filteredData: any = {};

  for (const [exchange, exchangeData] of Object.entries(data)) {
    if (exchangeNames.includes(exchange.toLowerCase())) {
      const { totalAsk, totalBid, time, ...rest } = exchangeData as {
        totalAsk: number;
        totalBid: number;
        time: number;
      };
      const milliseconds = time * 1000;
      const date = new Date(milliseconds);
      const formattedDate = date.toLocaleString();

      const adjustedTotalAsk = dataCrypto !== 0 ? totalAsk / dataCrypto : 0;
      const adjustedTotalBid = dataCrypto !== 0 ? totalBid / dataCrypto : 0;

      filteredData[exchange] = {
        ...rest,
        totalAsk: adjustedTotalAsk,
        totalBid: adjustedTotalBid,
        time: formattedDate,
      };
    }
  }
  return { ...filteredData };
};

export const getCoins = async () => {
  const dataCrypto = await getDolar();
  const tickers = coins.map((coin) => coin.ticker.toLowerCase());
  const apiEndpoints = tickers.map(generateApiEndpoint);

  const allData = await Promise.all(
    apiEndpoints.map((endpoint, index) =>
      fetchApiData(endpoint).then((data) => ({ ticker: tickers[index], data }))
    )
  );

  const filteredResults: any = {};
  allData.forEach(({ ticker, data }) => {
    filteredResults[ticker] = filterDataByExchangesWithTickerAsParent(
      data,
      dataCrypto
    );
  });

  return filteredResults;
};
