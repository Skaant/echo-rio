import type { AnimalSpecies } from "../../types/animals/AnimalSpecies";

export const SEVREL: AnimalSpecies = {
  id: "sevrel",
  name: "Sevrel",
  tags: ["mammal", "medium", "terrestrial", "herbivorous"],
  waterRange: 12,
  regime: [
    {
      input: {
        value: 1,
        id: "herbivorous",
        maxTrunk: 2,
      },
      output: {
        value: 1,
        tags: "nitrogen",
      },
    },
  ],
  propagationRate: 0.5,
};
