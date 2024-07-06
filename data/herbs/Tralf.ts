import type { HerbSpecies } from "../../types/plants/herbs/HerbSpecies";
import type { TreeSpecies } from "../../types/plants/trees/TreeSpecies";

export const TRALF: HerbSpecies = {
  id: "tralf",
  name: "Tralf",
  maxLeaves: 1,
  leaves: {
    productions: [
      {
        id: "base",
        type: "mulch",
        value: 0.5,
      },
      {
        id: "base",
        type: "nitrogen",
        value: 0.5,
      },
    ],
    regeneration: [
      {
        id: "base",
        value: 0.25,
      },
      {
        id: "by-leaves",
        value: 0.25,
      },
    ],
  },
  roots: {
    regeneration: [
      {
        id: "base",
        value: 0.25,
      },
      {
        id: "by-roots",
        value: 0.25,
      },
    ],
  },
};
