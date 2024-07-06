import type { ANIMAL_TAG } from "./AnimalTag";
import type { NITROGEN_TYPE } from "../cells/ressources/Nitrogen";
import type { CARCASS_TYPE } from "../cells/ressources/Carcass";

export type AnimalRegimes = {
  input: {
    value: number;
    /** If not matched */
    displease?: number;
  } & AnimalRegimeInput;
  output: {
    value: number;
    tags: NITROGEN_TYPE | CARCASS_TYPE;
  };
}[];
export type AnimalRegimeInput =
  | HerbivorousInput
  | AnimalRootInput
  | AnimalCarnivorousInput
  | AnimalScavengerInput
  | AnimalComposterInput
  | AnimalMushroomInput
  | AnimalForagerInput;
export type HerbivorousInput = {
  id: "herbivorous";
  maxTrunk: number;
};
export type AnimalRootInput = {
  id: "root";
  maxRoot: number;
};
export type AnimalCarnivorousInput = {
  id: "carnivorous";
  targets: ANIMAL_TAG[][];
};
export type AnimalScavengerInput = {
  id: "scavenger";
};
export type AnimalComposterInput = {
  id: "composter";
};
export type AnimalMushroomInput = {
  id: "mushroom";
};
export type AnimalForagerInput = {
  id: "forager";
};
