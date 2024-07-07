import type { Concept } from "../../Concept";

export type FALLEN_LEAVE_TYPE = "fallen-leave";
export const FALLEN_LEAVE_ID: FALLEN_LEAVE_TYPE = "fallen-leave";
export const FALLEN_LEAVE: Concept<FALLEN_LEAVE_TYPE> = {
  id: FALLEN_LEAVE_ID,
  name: "Feuilles au sol",
  description: "Ne vont pas tarder à se transformer en humus.",
};
