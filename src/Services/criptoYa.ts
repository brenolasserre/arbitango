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
  const exchangeDetails = exchanges.reduce((acc, exchange) => {
    acc[exchange.nombre.toLowerCase()] = exchange;
    return acc;
  }, {} as { [key: string]: { nombre: string; icon: string } });

  let highestBidExchange: any = null;
  let lowestAskExchange: any = null;
  let highestBid = -Infinity;
  let lowestAsk = Infinity;

  for (const [exchange, exchangeData] of Object.entries(data)) {
    const exchangeKey = exchange.toLowerCase();
    if (exchangeDetails[exchangeKey]) {
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

      const exchangeInfo = {
        ...rest,
        totalAsk: adjustedTotalAsk,
        totalBid: adjustedTotalBid,
        time: formattedDate,
        icon: exchangeDetails[exchangeKey].icon,
      };

      if (adjustedTotalBid > highestBid) {
        highestBid = adjustedTotalBid;
        highestBidExchange = { exchange, ...exchangeInfo };
      }

      if (adjustedTotalAsk < lowestAsk) {
        lowestAsk = adjustedTotalAsk;
        lowestAskExchange = { exchange, ...exchangeInfo };
      }
    }
  }

  // Format totalAsk and totalBid to two decimals
  if (highestBidExchange) {
    highestBidExchange.totalBid = parseFloat(
      highestBidExchange.totalBid.toFixed(2)
    );
  }
  if (lowestAskExchange) {
    lowestAskExchange.totalAsk = parseFloat(
      lowestAskExchange.totalAsk.toFixed(2)
    );
  }

  return {
    highestBidExchange,
    lowestAskExchange,
  };
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
