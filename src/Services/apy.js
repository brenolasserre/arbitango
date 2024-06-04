import { getPFInvestments } from "./rendimientos.ts";

const logInvestments = async () => {
  const investments = await getPFInvestments();
  console.log(investments);
};

logInvestments();
