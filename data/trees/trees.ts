import type { TreeSpecies } from "../../types/plants/trees/TreeSpecies";
import { FRAX } from "./Frax";

export const TREES_SPECIES: { [treeId: TreeSpecies["id"]]: TreeSpecies } = {
  [FRAX.id]: FRAX,
};
