import type { Concept } from "../../Concept";

export type FRUIT_TYPE = "fruit";
export const FRUIT_ID: FRUIT_TYPE = "fruit";
export const FRUIT: Concept<FRUIT_TYPE> = {
  id: FRUIT_ID,
  name: "Fruit",
  description: "Des restes d'animaux. Les charognards s'en régaleront",
};
