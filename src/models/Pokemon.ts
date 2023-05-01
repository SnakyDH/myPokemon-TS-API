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
  public get ID(): number {
    return this.id;
  }
  public get Name(): string {
    return this.name;
  }
  public get Sprites(): Sprites {
    return this.sprites;
  }
  public get Types(): string[] {
    return this.types;
  }
  public set ID(id: number) {
    this.id = id;
  }
  // Setters
  public set Name(name: string) {
    this.name = name;
  }
  public set Sprites(sprites: Sprites) {
    this.sprites = sprites;
  }
  public set Types(types: string[]) {
    this.types = types;
  }
}
export { Pokemon };
