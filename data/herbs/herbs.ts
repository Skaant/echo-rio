import type { HerbSpecies } from "../../types/plants/herbs/HerbSpecies";
import { TRALF } from "./Tralf";

export const HERBS_SPECIES: {
  [herbId: HerbSpecies["id"]]: HerbSpecies;
} = {
  [TRALF.id]: TRALF,
};
