import type { TreeSpecies } from "../../types/plants/trees/TreeSpecies";

export const FRAX: TreeSpecies = {
  id: "frax",
  name: "Frax",
  waterRange: 8,
  maxTrunk: 3,
  leaves: {
    productions: [
      {
        id: "base",
        type: "mulch",
        value: 0.25,
      },
      {
        id: "base",
        type: "fallen-leave",
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
  trunk: {
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
  propagation: {
    rate: 0.25,
    range: 5,
  },
};
