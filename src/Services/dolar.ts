export async function getDolar() {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares/cripto");
    if (!response.ok) {
      throw new Error(
        "Error al obtener la cotizacion del dolar. " + response.status
      );
    }
    const data = await response.json();
    const dataCrypto = data.compra;
    console.log(dataCrypto);
    return dataCrypto;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

getDolar();
