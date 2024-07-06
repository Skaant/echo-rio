import type { AnimalSpecies } from "../../types/animals/AnimalSpecies";

export const MUCHE: AnimalSpecies = {
  id: "muche",
  name: "Muche",
  tags: ["mammal", "medium", "terrestrial", "herbivorous"],
  waterRange: 10,
  regime: [
    {
      input: {
        value: 1,
        id: "herbivorous",
        maxTrunk: 1,
      },
      output: {
        value: 1,
        tags: "nitrogen",
      },
    },
  ],
  propagationRate: 0.5,
};
