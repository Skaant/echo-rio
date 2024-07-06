import type { AnimalSpecies } from "../../types/animals/AnimalSpecies";

export const NAFOX: AnimalSpecies = {
  id: "nafox",
  name: "Nafox",
  tags: ["mammal", "medium", "terrestrial", "carnivorous"],
  waterRange: 10,
  movement: 8,
  regime: [
    {
      input: {
        value: 1,
        id: "carnivorous",
        targets: [["mammal", "small", "terrestrial"]],
      },
      output: {
        value: 1,
        tags: "nitrogen",
      },
    },
    {
      input: {
        value: 1,
        id: "mushroom",
      },
      output: {
        value: 1,
        tags: "nitrogen",
      },
    },
  ],
  propagationRate: 0.5,
};
