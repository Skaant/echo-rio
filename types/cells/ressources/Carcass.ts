import type { Concept } from "../../Concept";

export type CARCASS_TYPE = "carcass";
export const CARCASS_ID: CARCASS_TYPE = "carcass";
export const CARCASS: Concept<CARCASS_TYPE> = {
  id: CARCASS_ID,
  name: "Carcasse",
  description: "Des restes d'animaux. Les charognards s'en régaleront",
};
