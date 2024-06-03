import { getCoins } from "../Services/criptoYa";

const logInvestments = async () => {
  const investments = await getCoins();
  console.log(investments);
};

logInvestments();
