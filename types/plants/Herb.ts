import type { Concept } from "../Concept";
import type { Entity } from "../entities/Entity";

export type HERB_TYPE = "herb";
export type Herb = Entity<HERB_TYPE> & {
  leaves: number;
  roots: number;
  rootsEaten: number;
};
export type RefHerb = Herb["id"];
export const HERB_ID: HERB_TYPE = "herb";
export const HERB: Concept = {
  id: HERB_ID,
  name: "Herbe",
  description: "Des feuilles et des racines",
};
