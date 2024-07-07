import type { Concept } from "../../Concept";

export type SOIL_TYPE = "soil";
export const SOIL_ID: SOIL_TYPE = "soil";
export const SOIL: Concept<SOIL_TYPE> = {
  id: SOIL_ID,
  name: "Sol",
  description: "Niveau de sol organique ou négatif",
};
