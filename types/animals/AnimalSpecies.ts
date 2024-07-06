import type { Concept } from "../Concept";
import type { Entity } from "../entities/Entity";
import type { AnimalRegimes } from "./AnimalRegimes";
import type { ANIMAL_TAG } from "./AnimalTag";

export type AnimalSpecies = Concept & {
  tags: ANIMAL_TAG[];
  waterRange?: number;
  /** Range for movement and propagation */
  movement?: number;
  regime?: AnimalRegimes;
  propagationRate?: number;
};
export type RefAnimalSpecies = AnimalSpecies["id"];
export const ANIMAL: Concept = {
  id: "animal",
  name: "Animal",
  description: "Une créature qui se déplace et se reproduit, a un régime.",
};
