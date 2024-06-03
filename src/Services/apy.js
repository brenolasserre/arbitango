import { getPFInvestments } from "./argentinaDatos.ts";

const logInvestments = async () => {
  const investments = await getPFInvestments();
  console.log(investments);
};

logInvestments();
