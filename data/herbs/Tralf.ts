import type { HerbSpecies } from "../../types/plants/herbs/HerbSpecies";

export const TRALF: HerbSpecies = {
  id: "tralf",
  name: "Tralf",
  waterRange: 14,
  maxLeaves: 1,
  leaves: {
    productions: [
      {
        id: "base",
        type: "fallen-leave",
        value: 0.25,
      },
      {
        id: "base",
        type: "mulch",
        value: 0.25,
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
  propagation: {
    rate: 0.5,
    range: 4,
  },
};
