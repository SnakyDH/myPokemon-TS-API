import { Request, Response } from "express";
import { Pokemon } from "../models/Pokemon";
import { Type, Sprites } from "../models/ResponseAPI";

const urlBase: string = "https://pokeapi.co/api/v2/pokemon/";

const getMyPokemon = async (req: Request, res: Response) => {
  try {
    const { name } = req.params;
    const url = `${urlBase}${name}`;
    const response = await fetch(url, { method: "GET" });
    if (response.status === 200) {
      const myData = await response.json();
      const arrayTypes = myData.types;
      const myTypes: Array<string> = arrayTypes.map(
        (objType: Type) => objType.type.name
      );
      // parsing
      const dataId: number = myData.id as number;
      const dataName: string = myData.name as string;
      const dataSprites: Sprites = myData.sprites as Sprites;
      // delete unnesesary
      delete dataSprites.other;
      delete dataSprites.versions;

      const myPokemon = new Pokemon(dataId, dataName, dataSprites, myTypes);
g      return res.status(200).json({ message: "OK", myPokemon: myPokemon });
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
