export async function getDolar() {
  try {
    const response = await fetch("https://criptoya.com/api/dolar");
    if (!response.ok) {
      throw new Error(
        "Error al obtener la cotizacion del dolar. " + response.status
      );
    }
    const data = await response.json();
    const dataCrypto = data.cripto.usdt.ask;
    return dataCrypto;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

async function main() {
  try {
    const dataCrypto = 1600;
  } catch (error) {
    console.error(error);
  }
}

main();
