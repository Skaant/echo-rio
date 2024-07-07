import type { AnimalSpecies } from "../../types/animals/AnimalSpecies";
import { LINKARU } from "./Linkaru";
import { MUCHE } from "./Muche";
import { NAFOX } from "./Nafox";
import { SEVREL } from "./Sevrel";

export const ANIMALS_SPECIES: {
  [animalId: AnimalSpecies["id"]]: AnimalSpecies;
} = {
  [LINKARU.id]: LINKARU,
  [MUCHE.id]: MUCHE,
  [NAFOX.id]: NAFOX,
  [SEVREL.id]: SEVREL,
};
