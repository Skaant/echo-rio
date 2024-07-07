import type { Concept } from "../Concept";
import type { Entity } from "../entities/Entity";
import type { RefAnimalSpecies } from "./AnimalSpecies";

export type ANIMAL_TYPE = "animal";
export const ANIMAL_ID: ANIMAL_TYPE = "animal";
export type Animal = Entity & {
  species: RefAnimalSpecies;
};
export const ANIMAL: Concept<ANIMAL_TYPE> = {
  id: ANIMAL_ID,
  name: "Animal",
  description:
    "Un individu d'une espèce animal, qui se déplace, se reproduit et a un régime.",
};
