import { Sprites } from "./ResponseAPI";

class Pokemon {
  private id: number;
  private name: string;
  private sprites: Sprites;
  private types: string[];

  constructor(id: number, name: string, sprites: Sprites, types: string[]) {
    this.id = id;
    this.name = name;
    this.sprites = sprites;
    this.types = types;
  }
  // Getters
  public get getID(): number {
    return this.id;
  }
  public get getName(): string {
    return this.name;
  }
  public get getSprites(): Sprites {
    return this.sprites;
  }
  public get getTypes(): string[] {
    return this.types;
  }
  // Setters
  public set setID(id: number) {
    this.id = id;
  }
  public set setName(name: string) {
    this.name = name;
  }
  public set setSprites(sprites: Sprites) {
    this.sprites = sprites;
  }
  public set setTypes(types: string[]) {
    this.types = types;
  }
}
export { Pokemon };
