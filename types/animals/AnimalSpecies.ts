import type { Concept } from "../Concept";
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
export const ANIMAL_SPECIES: Concept = {
  id: "animal-species",
  name: "Espèce animale",
  description: "Traits de caractères partagés entre individus.",
};
