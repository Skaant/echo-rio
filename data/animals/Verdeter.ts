import type { AnimalSpecies } from "../../types/animals/AnimalSpecies";

export const VERDETER: AnimalSpecies = {
  id: "verdeter",
  name: "Verdéter",
  tags: ["worm", "subterran"],
  movement: 1,
  regime: [
    {
      input: {
        value: 1,
        id: "composter",
      },
      output: {
        value: 1,
        tags: "nitrogen",
      },
    },
  ],
  propagationRate: 0.5,
};
