import { Opciones } from "../model/OpcionesFetch";

const getData = async (url: string, opc: Opciones) => {
  try {
    const response = await fetch(url, opc);
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    console.error(err);
  }
};

export { getData };
