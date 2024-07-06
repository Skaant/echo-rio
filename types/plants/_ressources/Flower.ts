import type { Concept } from "../../Concept";

export type FLOWER_TYPE = "flower";
export const FLOWER_ID: FLOWER_TYPE = "flower";
export const FLOWER: Concept<FLOWER_TYPE> = {
  id: FLOWER_ID,
  name: "Fleur",
  description: "Un plaisir pour les yeux, et les butineurs.",
};
