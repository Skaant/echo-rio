import type { MushroomSpecies } from "../../types/entities/MushroomSpecies";
import { CHAPOTUS } from "./Chapotus";
import { KUALIKOSTO } from "./Kualikosto";

export const MUSHROOMS_SPECIES: {
  [treeId: MushroomSpecies["id"]]: MushroomSpecies;
} = {
  [KUALIKOSTO.id]: KUALIKOSTO,
  [CHAPOTUS.id]: CHAPOTUS,
};
