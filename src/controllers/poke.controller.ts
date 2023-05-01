import { Request, Response } from "express";
import { Pokemon } from "../models/Pokemon";
import { Type } from "../models/ResponseAPI";

const urlBase: string = "https://pokeapi.co/api/v2/pokemon/";

const getMyPokemon = async (req: Request, res: Response) => {
  try {
    const { name } = req.query;
    if (name === undefined) {
      return res.status(400).json({ message: "Bad Request" });
    }
    const url = `${urlBase}${name}`;
    const response = await fetch(url, { method: "GET" });
    if (response.status === 200) {
      const myData = await response.json();
      const arrayTypes = myData.types;
      console.log(arrayTypes);
      const myTypes = arrayTypes.map((objType: Type) => objType.type.name);
      const myPokemon = new Pokemon(
        myData.id,
        myData.name,
        myData.sprites,
        myTypes
      );
      return res.status(200).json({ message: "OK", myPokemon: myPokemon });
    } else if (response.status === 404) {
      return res.status(404).json({ message: "Not Found" });
    } else {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (err) {
    console.error(err);
  }
};

export { getMyPokemon };
