export async function getDolar() {
  try {
    const response = await fetch("https://criptoya.com/api/dolar");
    if (!response.ok) {
      throw new Error(
        "Error al obtener los datos de la API de GitHub. " + response.status
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
    const dataCrypto = await getDolar();
  } catch (error) {
    console.error(error);
  }
}

main();
