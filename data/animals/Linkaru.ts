import type { AnimalSpecies } from "../../types/animals/AnimalSpecies";

export const LINKARU: AnimalSpecies = {
  id: "linkaru",
  name: "Linkaru",
  tags: ["mammal", "medium", "terrestrial", "carnivorous"],
  waterRange: 10,
  movement: 15,
  regime: [
    {
      input: {
        value: 1,
        id: "carnivorous",
        targets: [
          ["mammal", "medium", "terrestrial"],
          ["mammal", "small", "terrestrial"],
          ["medium", "bird"],
        ],
      },
      output: {
        value: 1,
        tags: "nitrogen",
      },
    },
  ],
  propagationRate: 0.5,
};
