import type { RefAnimal } from "../animals/AnimalSpecies";
import type { Concept } from "../Concept";
import type { RefHerb } from "../plants/Herb";
import type { RefTree } from "../plants/trees/Tree";

export type Cell = {
  id: string;
  coords: [number, number];
  mulch: number;
  fossilMulch: number;
  soil: number;
  nitrogen: number;
  animals: {
    large: (undefined | RefAnimal)[];
    medium: (undefined | RefAnimal)[];
    small: (undefined | RefAnimal)[];
  };
  refTrees: (undefined | RefTree)[];
  refHerbes: (undefined | RefHerb)[];
};
export type RefCell = Cell["id"];
export type CELL_TYPE = "cell";
export const CELL_ID: CELL_TYPE = "cell";
export const CELL: Concept<CELL_TYPE> = {
  id: CELL_ID,
  name: "Case",
  description:
    "Un espace délimité, dont le sol peut grandir, stocker des nutriments et accueillir plantes, animaux etc.",
};
