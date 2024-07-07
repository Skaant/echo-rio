import type { Concept } from "../../Concept";

export type MULCH_TYPE = "mulch";
export const MULCH_ID: MULCH_TYPE = "mulch";
export const MULCH: Concept<MULCH_TYPE> = {
  id: MULCH_ID,
  name: "Mulch",
  description: "Paillage sur le sol.",
};
