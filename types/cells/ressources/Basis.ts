import type { Concept } from "../../Concept";

export type BASIS_TYPE = "basis";
export const BASIS_ID: BASIS_TYPE = "basis";
export const BASIS: Concept<BASIS_TYPE> = {
  id: BASIS_ID,
  name: "Bases",
  description: "Fixées dans le sol, amplifient la fructification.",
};
